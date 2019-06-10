class CreateEvaluates < ActiveRecord::Migration[5.2]
  def change
    create_table :evaluates do |t|
      t.integer  :saler_id  ,foreign_key: true,null: false
      t.integer  :buyer_id  ,foreign_key: true,null: false
      t.string  :rate  ,null: false
      t.timestamps
    end
  end
end
