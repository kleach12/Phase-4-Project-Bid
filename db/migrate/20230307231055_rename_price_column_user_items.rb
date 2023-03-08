class RenamePriceColumnUserItems < ActiveRecord::Migration[7.0]
  def change
    rename_column :useritems, :price, :user_price
  end
end
