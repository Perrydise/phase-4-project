class ReviewsController < ApplicationController

    def create
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        current_review = Review.find(session[:review_id])
        render json: current_review
    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "Activity not found"}, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:body)
    end

end
