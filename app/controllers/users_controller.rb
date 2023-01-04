class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

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
    user.update(user_params)
    render json: user
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :profile_pic, :profile_banner)
  end

  def find_user
    User.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Bird not found" }, status: :not_found
  end


end
