class Creditcard < ApplicationRecord
  validates :card_number,length: { is: 16 }
  validates :limit_month,length: { in:1..2 }
  validates :limit_year,length: { is: 4 }
  validates :security_code,length: { in: 3..4 }

belongs_to :user
  

end
