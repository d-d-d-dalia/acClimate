class ScoreRecordsController < ApplicationController
  before_action :set_score_record, only: [:show, :update]

  # GET /score_records
  def index
    @score_records = ScoreRecord.all

    render json: @score_records
  end

  # GET /score_records/1
  def show
    render json: @score_record
  end

  # POST /score_records
  def create
    @score_record = ScoreRecord.new(score_record_params)

    if @score_record.save
      render json: @score_record, status: :created, location: @score_record
    else
      render json: @score_record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /score_records/1
  def update
    if @score_record.update(score_record_params)
      render json: @score_record
    else
      render json: @score_record.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_score_record
      @score_record = ScoreRecord.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def score_record_params
      params.require(:score_record).permit(:username)
    end
end
