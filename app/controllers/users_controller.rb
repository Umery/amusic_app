class UsersController < ApplicationController

  def index
  end

  def show
    @user = current_user
    @name = current_user.name
    @instrument = current_user.instrument
    @chats = current_user.chats.order('created_at DESC')
  end

  def edit
  end

  def update
  end
end
