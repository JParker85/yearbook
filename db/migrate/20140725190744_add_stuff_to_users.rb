class AddStuffToUsers < ActiveRecord::Migration
  def change
    add_column :users, :github, :string
    add_column :users, :linked_in, :string
    add_column :users, :website, :string
    add_column :users, :bio, :text
    add_column :users, :admin, :boolean
  end
end
