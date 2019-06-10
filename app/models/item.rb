class Item < ApplicationRecord
  belongs_to :first_genre
  belongs_to :second_genre
  belongs_to :third_genre
  has_many :comments
end
