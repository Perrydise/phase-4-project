class ReviewsController < ApplicationController
  wrap_parameters format:[]

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

    # def update
    #   @review = Review.find(params[:id])
    #   if @review.user_id == session[:user_id] 
    #     if @review.update(review_params)
    #       render json: @review, status: :ok
    #     else
    #       render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    #     end
    #   else
    #     render json: { message: "You are not authorized to update this review" }, status: :unauthorized
    #   end
    # end

    def update
      review = Review.find_by(id: params[:id])
      if review.user_id == session[:user_id] 
        if review.update(review_params)
          render json: review
        else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { message: "You are not authorized to update this review" }, status: :unauthorized
      end
    end
    

    def destroy
        review = Review.find_by(id: params[:id])
        if review.user_id == session[:user_id]
          review.destroy
          render json: { message: "Review deleted" }, status: :ok
        else
          render json: { message: "You are not authorized to delete this review" }, status: :unauthorized
        end
      end
      

    private

    def review_params
        params.permit(:body, :mountain_id, :user_id, :id )
    end

end
