class MountainsController < ApplicationController
    def create
        mountain = Mountain.create!(mountain_params)
        render json: mountain, status: :created
    end

    def index
        moutains = Mountain.all
        render json: mountains
    end

    def show
        current_mountain = Mountain.find(session[:mountain_id])
        render json: current_mountain
    end


    private

    def mountain_params
        params.permit(:name, :location)
    end

end
