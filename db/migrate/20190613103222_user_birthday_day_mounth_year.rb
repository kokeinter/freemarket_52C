class UserBirthdayDayMounthYear < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :birthday_year, :string,null: false
    change_column :users, :birthday_month, :string,null: false
    change_column :users, :birthday_day, :string,null: false

  end
end
