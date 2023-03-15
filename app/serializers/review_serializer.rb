class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :username
end
