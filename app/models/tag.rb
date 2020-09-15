class Tag < ApplicationRecord
  has_many :chat_tag_relations
  has_many :chats, through: :chat_tag_relations

  validates :name, uniqueness: true
end
