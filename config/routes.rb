Rails.application.routes.draw do
  resources :stores
  resources :items
  resources :users
  resources :useritems
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  post "/currstore", to: "store_session#create"
  delete "/endstore", to: "store_session#destroy"
  get "/storeme", to: "stores#show"
  get "/showingstore/:id", to: "stores#show_store"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
