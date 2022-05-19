class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|

      t.string :name
      t.string :server_id

      t.timestamps
    end

    add_column :users, :email, :string, null: false
  end
end
