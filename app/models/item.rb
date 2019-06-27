class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"
  # belongs_to :first_genre
  # belongs_to :second_genre
  # belongs_to :third_genre
  has_many :comments
  has_many :images
  accepts_nested_attributes_for :images
  mount_uploader :image, ImageUploader
  require 'payjp'
  
end
