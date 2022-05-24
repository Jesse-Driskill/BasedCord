class Server < ApplicationRecord
    belongs_to :Owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
end
