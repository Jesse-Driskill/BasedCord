class Server < ApplicationRecord
    belongs_to :Owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id

    has_many :server_memberships,
    foreign_key: :server_id, 
    class_name: :ServerMembership,
    dependent: :destroy

    has_many :members,
    through: :server_memberships, 
    source: :member

    def add_owner
        ServerMembership.create(member_id: self.owner_id, server_id: self.id)
    end
end
