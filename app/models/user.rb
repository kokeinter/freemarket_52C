class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable  
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
        has_many :comments, dependent: :destroy		
        has_many :likes, dependent: :destroy		
        has_many :points, dependent: :destroy		
        has_many :creditcards, dependent: :destroy		
        has_many :items, dependent: :destroy		
        has_one :address, dependent: :destroy
        has_one :creditcard,  dependent: :destroy
end
