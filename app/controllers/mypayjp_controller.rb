class MypayjpController < ApplicationController
  require 'payjp'
  require 'dotenv'
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

    def self.create_token(number, cvc, exp_month, exp_year)
      token = Payjp::Token.create(
        card: {
          number:    number,
          cvc:       cvc,
          exp_year:  exp_year,
          exp_month: exp_month,
        }
      )
      return token.id
    end

    def self.create_customer(number, cvc, exp_month, exp_year)
      token = self.create_token(number, cvc, exp_month, exp_year)
      Payjp::Customer.create(card: token)
    end
  end
end
