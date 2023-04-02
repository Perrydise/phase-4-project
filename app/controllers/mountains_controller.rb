class MountainsController < ApplicationController
    def create
        mountain = Mountain.create!(mountain_params)
        render json: mountain, status: :created
    end

    def index
        mountains = Mountain.all
        render json: mountains
    end

    # includes(:reviews).

    def show
        current_mountain = Mountain.find_by(id: params[:id])
        render json: current_mountain.to_json(include: :reviews)
    end

    def update
        mountain = Mountain.find_by(id: params[:id])
        if mountain
            mountain.update(mountain_params)
            render json: mountain
        else
            render json: { error: "Mountain not found" }, status: :not_found
        end
    end


    def destroy
        mountain = Mountain.find_by(id: params[:id])
        if mountain
            mountain.destroy
            head :no_content
        else
            render json: {error: "Activity not found"}, status: :not_found
        end
    end


    private

    def mountain_params
        params.permit(:name, :location)
    end

end
