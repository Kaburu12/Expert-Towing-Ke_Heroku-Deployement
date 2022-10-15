Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
   resources :requests, only:[:index,:show,:create,:destroy]
   resources :vehicles, only:[:index,:show,:update]
   post '/signup',to:"users#create"
   post '/login', to: "sessions#create"
   delete '/logout', to: "sessions#destroy"
   get '/me', to: "users#show"
   get '/users', to: "users#index"
  end
# config/routes.rb
get '*path', to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
