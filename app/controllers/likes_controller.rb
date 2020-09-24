class LikesController < ApplicationController
  def create
    @chat = Chat.find(params[:chat_id])
    @like = current_user.likes.build(chat_id: params[:chat_id])
    @like.save
    redirect_back(fallback_location: root_path)
  end

  def destroy
    @chat = Chat.find(params[:chat_id])
    @like = Like.find_by(chat_id: params[:chat_id], user_id: current_user.id)
    @like.destroy
  end
end
