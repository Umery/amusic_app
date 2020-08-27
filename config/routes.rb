Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"
  get 'users/index'

  resources :users, only: [:show, :edit, :update]
  resources :chats do
    resources :messages, only: [:create, :destroy]
  end
end