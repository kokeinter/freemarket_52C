class CreziltutokaDo < ActiveRecord::Migration[5.2]
  def change
    change_column :creditcards, :card_number, :string,unique: true,null: false
    change_column :creditcards, :security_code, :string,null: false
    change_column :creditcards, :limit_year, :string,null: false
    change_column :creditcards, :limit_month, :string,null: false

  end
end
