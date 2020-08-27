class LearnChoice
  include ActiveModel::Model
  attr_accessor :quiz, :content, :answer, :user_id

  with_options presence: true do
    validates :quiz
    validates :content
    validates :answer
  end

  def save
    learn = Learn.create!(quiz: quiz, user_id: user_id)
    Choice.create!(content: content, answer: answer, learn_id: learn.id)
  end
end