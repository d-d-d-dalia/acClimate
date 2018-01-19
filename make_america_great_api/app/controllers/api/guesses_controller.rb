module Api

  class GuessesController < ApplicationController
    before_action :set_guesses, only: [:show, :update]

    # GET /guesses
    def index
      @guesses = Guess.all

      render json: @guesses
    end

    # GET /guesses/1
    def show
      render json: @guess
    end

    # POST /guesses
    def create
      @guess = Guess.new(guess_params)

      if @guess.save
        render json: @guess, status: :created, location: @guess
      else
        render json: @guess.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /guesses/1
    def update
      if @guess.update(guess_params)
        render json: @guess
      else
        render json: @guess.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_guess
        @guess = Guess.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def guess_params
        params.require(:guess).permit(:guess, :date)
      end
  end

end
