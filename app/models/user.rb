class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable  
  validates :birthday_year,length: {is: 4 }
  validates :birthday_month,length: {in:1..2 }
  validates :birthday_day,length: {in:1..2 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
        has_many :comments, dependent: :destroy		
        has_many :likes, dependent: :destroy		
        has_many :points, dependent: :destroy		
        has_many :creditcards, dependent: :destroy		
        has_many :items, dependent: :destroy		
        has_one :adress, dependent: :destroy
        
end
