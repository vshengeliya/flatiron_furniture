Rails.application.routes.draw do

  resources :items, :carts

  get 'search', to: "items#search"

  namespace :api do
    namespace :v1 do
      resources :users
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
    end
  end

end
