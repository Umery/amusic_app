class Chat < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :category
  has_one_attached :image

  belongs_to :user

  with_options presence: true do
    validates :category
    validates :content
  end

  validates :category_id, numericality: { other_than: 1,
                                          message: 'を選択してください' }
end
