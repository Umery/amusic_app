class LearnChoice
  include ActiveModel::Model
  attr_accessor :quiz, :number, :choice_1, :choice_2, :choice_3, :choice_4, :choice_5, :choice_6, :answer, :user_id

  with_options presence: true do
    validates :quiz
    validates :number, numericality: { only_integer: true,
                                       greater_than_or_equal_to: 2,
                                       less_than_or_equal_to: 6 }

    validates :choice
    validates :answer
  end

  def save
    learn = Learn.create!(quiz: quiz, number: number, user_id: user_id)
    Choice.create!(choice: choice, answer: answer, learn_id: learn.id)
  end
end
