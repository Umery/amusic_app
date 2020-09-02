class ChatsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :show, :edit]
  before_action :set_chat, only: [:show, :edit, :update, :destroy]

  def index
    @chats = Chat.all.order('created_at DESC')
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
    @message = Message.new
    @messages = @chat.messages.includes(:user).order('created_at DESC')
  end

  def edit
  end

  def update
    if @chat.update(chat_params)
      redirect_to action: :show
    else
      render :edit
    end
  end

  def destroy
    if @chat.destroy
      redirect_to chats_path
    else
      render :edit
    end
  end

  def search
    @chats = Chat.search(params[:keyword])
  end

  private

  def chat_params
    params.require(:chat).permit(:category_id, :title, :content, :image).merge(user_id: current_user.id)
  end

  def set_chat
    @chat = Chat.find(params[:id])
  end
end
