class SecondGenre < ApplicationRecord
  belongs_to:first_genre
  has_many:third_genres
  # has_many:items
end
