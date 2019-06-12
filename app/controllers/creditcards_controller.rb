class CreditcardsController < ApplicationController
  def new
    @creditcard = Creditcard.new
  end

  def create
    Creditcard.create(user_id:current_user.id,card_number: creditcard_params[:card_number],security_code: creditcard_params[:security_code],limit_year: creditcard_params[:limit_year],limit_month: creditcard_params[:limit_month])
    redirect_to "/complete"
  end

  private

  def creditcard_params
    params.require(:creditcard).permit(:card_number,:security_code,:limit_year,:limit_month,)
  end
end
