class Guess < ApplicationRecord

	validates :guess, numericality: {only_integer: true}

end