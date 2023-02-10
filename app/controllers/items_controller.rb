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
    item = Item.create(item_params)
    if item.valid?
      render json: item, status: :created
    else 
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    item = find_item
    item.update(item_params)
    render json: item
  end

  def destroy
    item = find_item
    item.destroy
    head :no_content
  end


  private

  def find_item
    Item.find_by(id: params[:id])
  end

  def item_params
    params.permit(:name, :price, :user_id, :picture, :store_id, :id)
  end

  def render_not_found_response
    render json: { error: "Item not found" }, status: :not_found
  end
end
