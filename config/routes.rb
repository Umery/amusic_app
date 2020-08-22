Rails.application.routes.draw do
  devise_for :users
  root to: "users#index"
  get 'users/index'

  resources :users, only: [:show, :edit, :update]
  resources :chats, only: [:index, :new]
end