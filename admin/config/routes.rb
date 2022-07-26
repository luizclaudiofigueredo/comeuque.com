Rails.application.routes.draw do
  scope :api, defaults: { format: :json } do
    devise_for :usuarios, controllers: { sessions: :sessions },
    path_names: { sign_in: :login }

    resource :usuario, only: [:show, :update]
  end
  #devise_for :usuarios
  resources :produtos
  resources :grupos
  resources :empresas
  resources :slides
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
