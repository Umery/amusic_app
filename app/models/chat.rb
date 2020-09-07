class Chat < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  has_one_attached :image

  belongs_to :user
  has_many :messages, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user

  with_options presence: true do
    validates :category
    validates :content
  end

  validates :category_id, numericality: { other_than: 1,
                                          message: 'を選択してください' }

  def self.search(search)
    if search != ''
      Chat.where('content LIKE(?)', "%#{search}%")
    else
      Chat.all
    end
  end
end
