Rails.application.routes.draw do
  get 'chats/index'
  root to: "chats#index"
end
