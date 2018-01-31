class AddTemperatureToGuesses < ActiveRecord::Migration[5.1]
  def change
  	add_column :guesses, :temperature, :float
  end
end