class Tel < ApplicationRecord
  validates :tel,presence: true,
                  length: {is: 11}
end
