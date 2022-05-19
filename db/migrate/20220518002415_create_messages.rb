class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|

      t.integer :user_id, null: false
      t.integer :replied_to_id
      t.integer :channel_id

      t.timestamps
    end
  end
end
