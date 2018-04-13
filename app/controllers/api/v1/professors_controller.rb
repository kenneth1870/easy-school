module Api::V1
  class ProfessorsController < Api::V1::BaseController
    def index
      @professors = Professor.all
      render json: @professors
    end
  end
end
