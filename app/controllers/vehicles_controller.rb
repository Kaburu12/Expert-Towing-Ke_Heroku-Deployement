class VehiclesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #GET/vehicles/all
    def index
      vehicle = Vehicle.all
      render json: vehicle, status: :ok
    end

    #GET/vehicles/id
    def show
      vehicle = find_vehicle
      render json: vehicle, status: :ok
    end
 
    #PATCH/vehicles/id
    def update
        vehicle = find_vehicle
        vehicle.update!(vehicle_params)
        render json: vehicle
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    private

    def find_vehicle
        Vehicle.find_by(id: params[:id])
    end

    def vehicle_params
        params.permit(:name, :image,:phone,:price,:damage_rate, :is_in_display)
    end
  
    def render_not_found_response
      render json: { error: "Vehicle not found"}, status: :not_found
    end
  

end
