class Guess < ApplicationRecord

	validates :guess, numericality: {only_integer: true, :greater_than_or_equal_to => 0}

end