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
    if current_user.update(user_params)
      flash[:success] = "ユーザ登録情報更新"
      redirect_to action: :show
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :instrument)
  end
end
