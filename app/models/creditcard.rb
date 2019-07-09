class Creditcard < ApplicationRecord
    Payjp::api_key = ENV["SECRET_TEST_KEY"]
    def self.pay(customer, amount)
      Payjp::Charge.create(
        amount:   amount,
        customer: customer,
        currency: 'jpy'
      )
    end

  belongs_to :user
end
