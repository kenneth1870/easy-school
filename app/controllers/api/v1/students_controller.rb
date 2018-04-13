module Api::V1
  class StudentsController < Api::V1::BaseController
    before_action :set_student, only: %i[show edit update destroy]

    def index
      respond_with Student.all
    end

    def create
      respond_with :api, :v1, Student.create(student_params)
    end

    def destroy
      respond_with @student.destroy
    end

    def update
      @student.update_attributes(student_params)
      respond_with @student, json: @student
    end

    private

    def set_student
      @student = Student.find(params[:id])
    end

    def student_params
      params.require(:student).permit(:id,
                                      :first_name,
                                      :first_name,
                                      :grade,
                                      :info)
    end
  end
end
