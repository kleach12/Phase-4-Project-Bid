class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :username, presence: true
  has_secure_password
  has_many :items, dependent: :destroy
  has_many :stores, through: :items
end
