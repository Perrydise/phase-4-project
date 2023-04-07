class ReviewsController < ApplicationController

    def create
        puts params
        current_body = params[:body]
        current_user = session[:user_id]
        current_mountain = params[:mountainId]
        puts current_user
        
        # review = Review.create!(review_params)
        review = Review.new
        review.body = current_body
        review.user_id = current_user
        review.mountain_id = current_mountain
        puts review
        if review.save
            puts review
            render json: review, status: :created, serializer: ReviewSerializer
        else
            render json: {error: "could not create"}, status: :unprocessable_entity
        end
    end

    def index
        reviews = Review.all
        render json: reviews
    end

    def show
        current_review = Review.find(session[:review_id])
        render json: current_review
    end

    # def destroy
    #     review = Review.find_by(id: params[:id])
    #     if review
    #         review.destroy
    #         head :no_content
    #     else
    #         render json: {error: "could not create"}, status: :unprocessable_entity
    #     end
    # end

    def destroy
        # current_user = session[:user_id]
        review = Review.find_by(id: params[:id])
        if review.user_id == session[:user_id]
          review.destroy
        #   head :no_content
          render json: { message: "Review deleted" }, status: :ok
        else
          render json: { message: "You are not authorized to delete this review" }, status: :unauthorized
        end
      end
      

    private

    def review_params
        params.permit(:body, :mountain_id, :user_id )
    end

end
