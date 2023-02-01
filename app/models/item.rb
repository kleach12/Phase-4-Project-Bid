class Item < ApplicationRecord
  belongs_to :store
  belongs_to :user, optional: :true
end
