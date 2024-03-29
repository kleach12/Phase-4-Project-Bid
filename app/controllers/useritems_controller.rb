class UseritemsController < ApplicationController

  def create 
    user = user_in_session 
   if user_in_session
    useritem = Useritem.create(user_item_params)
      if useritem.valid?
        render json: useritem
      else
        render json: {errors: useritem.errors.full_messages}
      end
    else 
      render json: {error: "This User is not signed in"}
    end
  end

  def user_items
    user = user_in_session
    if user
      items = Useritem.where(user_id: user.id)
      render json: items
    else 
      render json: {error: "This User does not exist"}
    end
  end

  private

  def user_in_session
    User.find_by(id: session[:user_id]) 
  end

  def user_item_params
    params.permit(:item_id, :user_price).merge({user_id: session[:user_id]})
  end

end
