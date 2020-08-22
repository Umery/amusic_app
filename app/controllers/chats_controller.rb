class ChatsController < ApplicationController
  before_action :authenticate_user!, only: :new

  def index
    @chats = Chat.all.order("created_at DESC")
  end

  def new
    @chat = Chat.new
  end
end
