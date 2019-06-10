class CreateSecondGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :second_genres do |t|
      t.string  :genre  ,null: false
      t.integer  :first_genre_id  ,null: false

      t.timestamps
    end
  end
end
