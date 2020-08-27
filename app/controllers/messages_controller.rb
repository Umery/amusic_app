class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    @message = Message.new(message_params)
    if @message.save
      redirect_to "/chats/#{@message.chat.id}"
      # render json:{ get: message }
    else
      redirect_to "/chats/#{@message.chat.id}"
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
  end

  private

  def message_params
    params.require(:message).permit(:text).merge(user_id: current_user.id, chat_id: params[:chat_id])
  end
end
