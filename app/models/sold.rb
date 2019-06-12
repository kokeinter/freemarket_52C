class Sold < ApplicationRecord
  belongs_to :item
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"

end
