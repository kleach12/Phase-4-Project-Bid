class Store < ApplicationRecord
  validates :name, length: { minimum: 5 }
  validates :name, uniqueness: true
  validates :name, presence: true
  validates :picture, presence: true
  has_secure_password
  has_many :items, dependent: :destroy
  has_many :users, through: :items
end
