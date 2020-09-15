class Chat < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  has_one_attached :image

  belongs_to :user
  has_many :messages, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
  has_many :chat_tag_relations
  has_many :tags, through: :chat_tag_relations

  def self.search(search)
    if search != ''
      Chat.where('content LIKE(?)', "%#{search}%")
    else
      Chat.all
    end
  end
end
