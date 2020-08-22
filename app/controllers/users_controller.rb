class UsersController < ApplicationController
  before_action :authenticate_user!, only: :edit

  def index
  end

  def show
    @user = current_user
    @name = current_user.name
    @instrument = current_user.instrument
    # @chats = current_user.chats
  end

  def edit
  end

  def update
  end
end
