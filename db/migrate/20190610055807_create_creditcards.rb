class CreateCreditcards < ActiveRecord::Migration[5.2]
  def change
    create_table :creditcards do |t|
      t.integer  :user_id  ,foreign_key: true,null: false
      t.integer  :card_number  ,unique: true,null: false
      t.integer  :security_code   ,null: false
      t.integer  :limit_year  ,null: false
      t.integer :limit_month   ,null: false


      t.timestamps
    end
  end
end
