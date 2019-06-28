class Creditcard < ApplicationRecord

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

  belongs_to :user
end
