class UsersController < ApplicationController
  def index
  end

  def show
    @user = User.find_by(id: params[:id])
    @name = @user.name
    @instrument = @user.instrument
    @chats = @user.chats.order('created_at DESC')
  end

  def edit
  end

  def update
  end
end
