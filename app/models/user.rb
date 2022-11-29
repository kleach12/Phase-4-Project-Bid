class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  # validates :password, length: { minimum: 7 } there is an issue with this while updating
  has_secure_password
end
