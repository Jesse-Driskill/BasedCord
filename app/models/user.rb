class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: :Server

    has_many :server_memberships,
    foreign_key: :member_id, 
    class_name: :ServerMembership,
    dependent: :destroy

    has_many :servers,
    through: :server_memberships, 
    source: :server

    def self.find_by_credentials(username, password)
        user=User.find_by(username: username)
        if user && BCrypt::Password.new(user.password_digest).is_password?(password)
            return user
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        return self.session_token
    end


    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end
