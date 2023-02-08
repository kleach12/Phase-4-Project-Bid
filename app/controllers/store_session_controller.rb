class StoreSessionController < ApplicationController
  def create
    store = Store.find_by(name:params[:name])
    if store&.authenticate(params[:password])
      session[:store_id] = store.id 
      render json: store, status: :created , include: :items
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  def destroy
    session.delete :store_id
    head :no_content
  end
  
end
