class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  with_options presence: true do
    validates :name

    validates :email, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/ },
                      uniqueness: { case_sensitive: false }

    validates :password, length: { minimum: 6 },
                         format: { with: /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,100}+\z/i,
                                   message: 'は半角英数と半角数字を混合させてください' }
  end

  has_many :chats
  has_many :messages
  has_many :likes, dependent: :destroy
  has_many :like_chats, through: :likes, source: :chat
  has_many :learns
  has_one :play
end
