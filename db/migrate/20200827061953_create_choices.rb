class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.string :choice, null: false
      t.boolean :answer, default: false, null: false
      t.references :learn, null: false, foreign_key: true
      t.timestamps
    end
  end
end