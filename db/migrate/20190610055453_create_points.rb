class CreatePoints < ActiveRecord::Migration[5.2]
  def change
    create_table :points do |t|
      t.integer  :profit  ,null: false
      t.integer  :item_id  ,foreign_key: true,null: false
      t.integer  :user_id  ,foreign_key: true,null: false
      t.timestamps
    end
  end
end
