class Review < ApplicationRecord
    validates :body, presence: true
    validates :user, presence: true
    validates :mountain, presence: true
    validates :body, length: { within: 5...200, message: "Must be between 5 to 200 characters" }  

    belongs_to :user
    belongs_to :mountain

    delegate :username, to: :user
end
