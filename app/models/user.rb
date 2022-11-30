class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  has_secure_password
end
