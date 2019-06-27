class CreateCreditcards < ActiveRecord::Migration[5.2]
  def change
    create_table :creditcards do |t|
      t.string  :token  
      t.string  :customer_id
      t.integer :user_id
      t.timestamps
    end
  end
end
