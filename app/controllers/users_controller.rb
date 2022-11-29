class UsersController < ApplicationController

  def index 
    render json: User.all
  end

  def show 
    user = User.find_by(id: session[:user_id])
    if user
      render json: user 
    else
    render json: {error: "No user logged in"}, status: :unauthorized
    end
  end

  def create 
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else 
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = find_user
    if user
      user.update(user_params)
      render json: user
    else
      render json: {error: "User not found"}, status: :not_found
    end
  end


  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :profile_pic, :profile_banner)
  end

  def find_user
    User.find_by(id: params[:id] )
  end

end
