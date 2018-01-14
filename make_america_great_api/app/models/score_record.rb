class ScoreRecord < ApplicationRecord

	validates :username, presence: true
	validates :right_guesses, :wrong_guesses, numericality: {only_integer: true, :greater_than_or_equal_to => 0}

end