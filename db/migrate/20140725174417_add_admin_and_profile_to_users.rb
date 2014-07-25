class AddAdminAndProfileToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :profile, index: true
    add_column :users, :admin, :boolean
  end
end
