class MypayjpController < ApplicationController
  protect_from_forgery
  Dotenv.load
  
  class Mypayjp

    if Rails.env.development?
      Payjp::api_key = Rails.application.credentials.payjp[:secret_test_key]
    else
      Payjp::api_key = Rails.application.credentials.payjp[:secret_key]
    end

    def self.pay(customer, amount)
      Payjp::Charge.create(
        amount:   amount,
        customer: customer,
        currency: 'jpy'
      )
    end
  end
end
