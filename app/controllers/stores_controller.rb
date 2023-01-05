class StoresController < ApplicationController

  def index
    render json: Store.all
  end

  def show 
    store = find_store
    if store
      render json: store 
    else 
      render json: {error: "This store does not exisit"}, status: :ok
    end 
  end 

  def create
    store = Store.create(store_params)
    if store 
      render json: store, status: :created
    else
      render json: {errors: store.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private 

  def store_params 
    params.permit(:name, :picture)
  end 

  def find_store
    Store.find_by(params[:id])
  end 

end
