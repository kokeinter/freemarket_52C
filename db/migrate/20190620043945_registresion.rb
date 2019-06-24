class Registresion < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :birthday_year, :string,null: false
    change_column :users, :birthday_month, :string,null: false
    change_column :users, :birthday_day, :string,null: false

  end
  def down
  end
end
