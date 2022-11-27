class AddProfilePicProfileBanner < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :profile_pic, :string
    add_column :users, :profile_banner, :string
  end
end
