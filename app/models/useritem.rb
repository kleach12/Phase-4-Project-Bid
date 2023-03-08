class Useritem < ApplicationRecord
  validates :user_id, presence: true
  validates :item_id, presence: true
  validates :user_price, presence: true
  validates :user_price, numericality: { only_integer: true }
  belongs_to :user
  belongs_to :item
end
