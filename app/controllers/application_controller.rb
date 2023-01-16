class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized

  def authorized
    if !session.include? :user_id
      return render json:{error: "Not Authorized"}, status: :unauthorized
    end
    # return render json:{error: "Not Authorized"}, status: :unauthorized 
    # unless session.include? :user_id     
  end

end

