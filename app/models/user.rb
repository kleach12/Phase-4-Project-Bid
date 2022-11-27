class User < ApplicationRecord
  validates :username, length: { minimum: 5 }
  validates :username, uniqueness: true
  validates :password_digest, length: { minimum: 7 }
  has_secure_password
end
