class StoreSerializer < ActiveModel::Serializer
  attributes :name, :picture
  has_many :items
end
