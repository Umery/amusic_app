class Chat < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  has_one_attached :image

  belongs_to :user
  
  with_options presence: true do
    validates :category
    validates :title
    validates :content
  end

  validates :category_id, numericality: { other_than: 1 }
end
