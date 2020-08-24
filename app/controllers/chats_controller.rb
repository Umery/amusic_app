class ChatsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :show, :edit]

  def index
    @chats = Chat.all.order("created_at DESC")
  end

  def new
    @chat = Chat.new
  end

  def create
    @chat = Chat.new(chat_params)
    if @chat.save
      redirect_to chats_path
    else
      render :new
    end
  end

  def show
    @chat = Chat.find(params[:id])
  end

  private

  def chat_params
    params.require(:chat).permit(:category_id, :title, :content, :image).merge(user_id: current_user.id)
  end
end
