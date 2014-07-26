class AddNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :course, :string
    add_column :users, :cohort, :string
  end
end
