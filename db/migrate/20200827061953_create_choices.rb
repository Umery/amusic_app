class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.string :choice_1, null: false
      t.string :choice_2, null: false
      t.string :choice_3
      t.string :choice_4
      t.string :choice_5
      t.string :choice_6
      t.integer :answer, null: false
      t.references :learn, null: false, foreign_key: true
      t.timestamps
    end
  end
end