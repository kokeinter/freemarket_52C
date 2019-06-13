class CreateTels < ActiveRecord::Migration[5.2]
  def change
    create_table :tels do |t|
      t.string      :tel
      t.integer     :user_id
      t.timestamps
    end
  end
end
