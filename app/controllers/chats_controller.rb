class ChatsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :show, :edit]
  before_action :set_chat, only: [:show, :edit, :update, :destroy]

  def index
    @chats = Chat.includes(:user).all.order('created_at DESC')
  end

  def new
    @chat = ChatTag.new
  end

  def create
    @chat = ChatTag.new(chat_params)
    if @chat.save
      redirect_to chats_path
    else
      render :new
    end
  end

  def show
    @message = Message.new
    @messages = @chat.messages.includes(:user).order('created_at DESC')
    @like = Like.new
  end

  def edit
  end

  def update
    
    if @chat.update(chats_params)
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

  def search_tag
    return nil if params[:input] == ''

    tag = Tag.where(['name LIKE ?', "%#{params[:input]}%"])
    render json: { keyword: tag }
  end

  def search
    @chats = Chat.search(params[:keyword])
  end

  private

  def chats_params
    params.require(:chat_tag).permit(:title, :content, :image, :name).merge(user_id: current_user.id)
  end

  def chat_params
    params.require(:chat_tag).permit(:title, :content, :image, :name).merge(user_id: current_user.id)
  end

  def set_chat
    @chat = Chat.find(params[:id])
  end
end
