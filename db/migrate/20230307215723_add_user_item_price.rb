class AddUserItemPrice < ActiveRecord::Migration[7.0]
  def change
    add_column :useritems, :price, :integer
  end
end
