class AddLikesToGuesses < ActiveRecord::Migration[5.1]
  def change
  	add_column :guesses, :likes, :integer
  end
end
