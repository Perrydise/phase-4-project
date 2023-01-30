class User < ApplicationRecord
    has_secure_password

    validates :username, :password, presence: true

    has_many :reviews
    has_many :mountains, through: :reviews
    

end
