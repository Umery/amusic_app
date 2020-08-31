class Learn < ApplicationRecord
  has_many :choices
  belongs_to :user
end
