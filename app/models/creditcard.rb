class Creditcard < ApplicationRecord

    if Rails.env.development?
      Payjp::api_key = ENV["SECRET_TEST_KEY"]
    else
      Payjp::api_key = ENV["SECRET_KEY"]
    end

    def self.pay(customer, amount)
      Payjp::Charge.create(
        amount:   amount,
        customer: customer,
        currency: 'jpy'
      )
    end

  belongs_to :user
end
