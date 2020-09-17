class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :chat_id

      t.timestamps
      t.index [:user_id, :chat_id], unique: true
    end
  end
end
