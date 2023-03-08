class ItemSerializer < ActiveModel::Serializer
  attributes :id, :price, :name,:picture

  has_many :useritems
  belongs_to :store
end
