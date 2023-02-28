class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index 
    render json: User.all
  end

  def show 
    user = user_in_session
    if user
      render json: user
    else
      render json: {error: "No user logged in"}, status: :ok
    end
  end

  def create 
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id 
      render json: user, status: :created
    else 
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    user = user_in_session
    if user
    user.update(user_params)
    render json: user
    else
      render json: {error: "This User is not logged in"}
    end
  end

  def destroy
    user = user_in_session
    if user
      user.destroy
      head :no_content
    else
      render json: {error: "This User is not logged in"}
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :profile_pic, :profile_banner)
  end

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

  def find_user
    User.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found
  end

end
