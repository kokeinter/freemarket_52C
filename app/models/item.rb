class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"
  # belongs_to :first_genre
  # belongs_to :second_genre
  # belongs_to :third_genre
  has_many :comments
  has_many :images
  accepts_nested_attributes_for :images
  
  # mount_uploader :image, ImageUploader
  # def self.create_photos_by(item_params)
  #       item_params[:image].each do |image|
  #         new_image = Image.new(image:image)
  #         return false unless new_image.save!
  #       end
  #     end
    
  #     true
  #   end
  # def self.create_photos_by(item_params)
  #       item_params{:images[]}.each do |image|
  #          item_params[:image]= image
  #          return 
  #       end
  #     end
    
end
