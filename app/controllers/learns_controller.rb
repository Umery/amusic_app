class LearnsController < ApplicationController
  before_action :authenticate_user!,only: [:new, :create]

  def index
    # @learns = LearnChoice.all.order('created_at DESC')
  end

  def new
    @learn = LearnChoice.new
  end

  def create
    @learn = LearnChoice.new(learn_params)
  end

  private

  def learn_params
    params.permit(:quiz, :content, :answer).merge(user_id: current_user.id)
  end
end