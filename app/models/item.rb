class Item < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :price, numericality: { only_integer: true }
  validates :picture, presence: true
  belongs_to :store
  has_many :useritems
  has_many :users, through: :useritems
end
