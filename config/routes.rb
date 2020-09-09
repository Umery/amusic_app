Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"
  get 'users/index'

  resources :users, only: [:show, :edit, :update]
  resources :chats do
    resources :messages, only: :create
    collection do
      get 'search'
    end
    resources :likes, only: [:create, :destroy]
  end
  resources :learns, only: :index 
  resources :plays, only: :index 
end