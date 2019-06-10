class CreateThirdGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :third_genres do |t|
      t.string  :genre  ,null: false
      t.integer  :second_genre_id  ,null: false


      t.timestamps
    end
  end
end
