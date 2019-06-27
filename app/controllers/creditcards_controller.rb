class CreditcardsController < MypayjpController
  
  def new
    @user=User.find(current_user.id)
  end

  def create
    if params[:payjpToken].present?
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
