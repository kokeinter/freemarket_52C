class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string  :name  ,null: false
      t.text  :text  ,null: false
      t.string  :image   ,null: false
      t.string  :condition  ,null: false
      t.integer :saler_id    ,foreign_key: true,null: false
      t.integer  :buyer_id ,foreign_key: true,null: false
      t.integer  :first_genre_id  ,null: false
      t.integer  :second_genre_id   ,null: false
      t.integer  :third_genre_id  ,null: false
      t.string :size
      t.string  :postage    ,null: false
      t.string  :sending_region  ,null: false
      t.string  :shipping_day   ,null: false
      t.integer  :price  ,null: false
      t.string  :shipping_style   ,null: false
      t.timestamps
    end
  end
end
