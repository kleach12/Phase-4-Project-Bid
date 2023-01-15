class Store < ApplicationRecord
  validates :name, length: { minimum: 5 }
  validates :name, uniqueness: true
  has_secure_password
  has_many :items
  has_many :users, through: :items
end
