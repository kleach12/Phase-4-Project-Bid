class Item < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :price, numericality: { only_integer: true }
  validates :picture, presence: true
  belongs_to :store
  belongs_to :user, optional: :true
end
