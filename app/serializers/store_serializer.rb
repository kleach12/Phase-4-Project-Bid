class StoreSerializer < ActiveModel::Serializer
  attributes :name, :picture, :items
  has_many :items
end
