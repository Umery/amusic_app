class MessagesController < ApplicationController
  before_action :authenticate_user!

  def create
    @message = Message.new(message_params)
    @message.save
    # ActionCable.server.broadcast 'message_channel', content: @message
    redirect_back(fallback_location: chat_messages_path)
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
