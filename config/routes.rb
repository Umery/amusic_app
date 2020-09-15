Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"
  get 'users/index'

  resources :users, only: [:show, :edit, :update]
  resources :chats do
    collection do
      get 'search_tag'
    end
    resources :messages, only: :create
    collection do
      get 'search'
    end
    resources :likes, only: [:create, :destroy]
  end
  resources :learns, only: :index 
  resources :plays, only: :index 
end