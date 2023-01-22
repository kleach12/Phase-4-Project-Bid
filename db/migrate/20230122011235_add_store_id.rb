class AddStoreId < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :store_id, :integer
  end
end
