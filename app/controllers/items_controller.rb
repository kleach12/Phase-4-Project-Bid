class ItemsController < ApplicationController

  def index 
    render json: Item.all.uniq(&:name).shuffle[0..4], include: :store
  end

  def show 
    item = find_item
    if item
      render json: item.uniq(&:name)
    else
      render json: {error: "Item not found"}, status: :not_found
    end
  end

  def create 
    store = Store.find_by(id: session[:store_id]) 
    if store 
     item = Item.create(item_params)
     if item.valid?
        render json: item, status: :created
     else 
       render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
      end
    else 
     render json: {error: "This Store is not logged in"}
    end
  end

  # def user_items
  #   user = User.find_by(id: session[:user_id]) 
  #   # user = User.find_by(params[:id])
  #   if user 
  #     render json: user
  #   else 
  #     render json: {error: "Error Error"}
  #   end
  # end


  private

  # def user_in_session
  #   User.find_by(id: session[:user_id]) 
  # end
  
  def find_item
    Item.find_by(id: params[:id])
  end

  def item_params
    params.permit(:name, :price, :user_id, :picture, :id).merge({store_id: session[:store_id], user_id: ession[:user_id]})
  end

  def render_not_found_response
    render json: { error: "Item not found" }, status: :not_found
  end
end
