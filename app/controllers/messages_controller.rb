class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    Message.create(message_params)
    redirect_to "/chats/#{message.chat.id}"
  end

  private
  def message_params
    params.require(:message).permit(:text).merge(user_id: current_user.id, chat_id: params[:chat_id])
  end
end
