Rails.application.routes.draw do
  devise_for :users
  root to: "chats#index"
  get 'chats/index'
end