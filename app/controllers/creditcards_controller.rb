require "creditcard.rb"
class CreditcardsController < ApplicationController
  protect_from_forgery
  
  def new
    @user=User.find(current_user.id)
    @publickey= ENV["PUBLIC_TEST_KEY"]
  end

  def create
    if params[:payjpToken].present?
      Payjp.api_key = ENV["SECRET_TEST_KEY"]
      customer=Payjp::Customer.create(card: params[:payjpToken])
      Creditcard.create(token: params[:payjpToken],user_id: creditcard_params[:user_id],customer_id: customer[:id])
      redirect_to "/users/complete"
    else
      redirect_to new_creditcard_path
    end
  end

  private

  def creditcard_params
    params.permit(:payjpToken,:user_id)
  end
end
