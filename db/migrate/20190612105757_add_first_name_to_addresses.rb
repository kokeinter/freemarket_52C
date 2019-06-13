class AddFirstNameToAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :addresses, :first_name, :string
    add_column :addresses, :last_name, :string
    add_column :addresses, :kana_first_name, :string
    add_column :addresses, :kana_last_name, :string
    add_column :addresses, :user_id, :integer

  end
end
