class StoresController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    render json: Store.all , include: :items
  end

  def show 
    store = Store.find_by(id: session[:store_id])
    if store
      render json: store, include: :items
    else 
      render json: {error: "This store does not exisit"}, status: :ok
    end 
  end 

  def create
    store = Store.create(store_params)
    if store.valid?
      session[:store_id] = store.id 
      render json: store, status: :created, include: :items
    else
      render json: {errors: store.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show_store
    store = find_store
    if store 
      render json: store, include: :items
    else 
      render json: {error: "This store does not exisit"}, status: :ok
    end
  end

  def update 
    store = Store.find(params[:id])
    store.update(store_params )
    render json: store, include: :items
  end

  private 

  def store_params 
    params.permit(:name, :picture, :password, :password_confirmation)
  end 

  def find_store
    Store.find(params[:id])
  end 

  def render_not_found_response
    render json: { error: "Bid not found" }, status: :not_found
  end

end
