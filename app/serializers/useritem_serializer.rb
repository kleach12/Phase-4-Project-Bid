class UseritemSerializer < ActiveModel::Serializer
  attributes :user_price

  belongs_to :item
  belongs_to :user
end
