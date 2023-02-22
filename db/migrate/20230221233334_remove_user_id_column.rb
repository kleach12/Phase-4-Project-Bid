class RemoveUserIdColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :user_id
  end
end
