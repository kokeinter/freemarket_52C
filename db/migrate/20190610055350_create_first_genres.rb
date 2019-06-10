class CreateFirstGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :first_genres do |t|
      t.string  :genre  ,null: false

      t.timestamps
    end
  end
end
