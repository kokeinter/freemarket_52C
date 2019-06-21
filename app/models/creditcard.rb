class Creditcard < ApplicationRecord
  validates :card_number,length: { is: 16 }
  
  validates :security_code,length: { in: 3..4 }

belongs_to :user
  

end
