class CreateScoreRecords < ActiveRecord::Migration[5.1]
  def change
    create_table :score_records do |t|
      t.string :username
      t.integer :right_guesses
      t.integer :wrong_guesses

      t.timestamps
    end
  end
end