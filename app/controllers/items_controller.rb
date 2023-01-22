class ItemsController < ApplicationController
  def index 
    render json: Item.all
  end

  def show 
    item = find_item
    if item
      render json: item
    else
      render json: {error: "Item not found"}, status: :not_found
    end
  end

  def create 
    item = Item.create(item_params)
    if item.valid?
      render json: item, status: :created
    else 
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end


  private

  def find_item
    Item.find_by(id: params[:id])
  end

  def item_params
    params.permit(:name, :price, :user_id, :picture)
  end

  def render_not_found_response
    render json: { error: "Bird not found" }, status: :not_found
  end
end
