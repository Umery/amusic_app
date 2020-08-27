class Learn < ApplicationRecord
  has_one :choice
  belongs_to :user
end
