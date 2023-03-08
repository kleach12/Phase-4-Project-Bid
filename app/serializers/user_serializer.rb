class UserSerializer < ActiveModel::Serializer
  attributes :username, :profile_pic, :profile_banner

  has_many :useritems
  has_many :items
end
