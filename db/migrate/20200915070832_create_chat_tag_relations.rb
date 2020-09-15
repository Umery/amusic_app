class CreateChatTagRelations < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_tag_relations do |t|
      t.references :chat, foreign_key: true
      t.references :tag, foreign_key: true
      t.timestamps
    end
  end
end
