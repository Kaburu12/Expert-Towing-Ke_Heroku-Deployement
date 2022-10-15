class RequestsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET/request
    def index
        request = Request.all
        render json: request
    end
    #GET/requests/id
    def show
        request = Request.find_by(id: params[:id])
        render json: request
    end
    #POST/requests
    def create
        request = Request.create!(request_params)
        render json: request
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    #DELETE/requests/:id
    def destroy
      request = Request.find_by(id: params[:id])
      request.destroy
      render json:{}, status: :not_found
      #head:not_found 
    end

    private 
    

    def request_params
        params.permit(:name, :location,:phone,:user_id)
    end

    def render_not_found_response
        render json: { error: "Request not found" }, status: :not_found
    end

end
