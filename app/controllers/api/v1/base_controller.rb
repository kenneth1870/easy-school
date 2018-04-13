module Api::V1
  class BaseController < ActionController::Base
    respond_to :json
  end
end
