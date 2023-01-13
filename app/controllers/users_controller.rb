class UsersController < ApplicationController
    wrap_parameters fromat:[]
    skip_before_action :authorized, only: [:create]

    def create
        user = User.create!(user_params)
    end

    def show
        current_user = User.find(session[:user_id])
        render json: current_user
    end

    def index
        users = User.all
        render json: users
    end

    private

    def rendor_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :unprocessable_entity
    end

    def user_params
        params.permit(:username, :password)
    end


end
