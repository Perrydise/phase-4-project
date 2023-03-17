class Review < ApplicationRecord
    validates :body, presence: true
    validates :body, length: { within: 5...200, message: "Must be between 5 to 200 characters" }  

    belongs_to :users
end
