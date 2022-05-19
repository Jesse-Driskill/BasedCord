class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|

      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :icon

      t.timestamps
    end
  end
end
