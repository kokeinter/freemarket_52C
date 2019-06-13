class UsersController < ApplicationController
  def new
    @user = User.new
  end
  def index
  end
  def show
    @user = User.find(current_user.id)
  end

  def update
    @tel = Tel.new(tel:user_params[:tel],user_id:current_user.id)
   
      if @tel.save
        redirect_to new_address_path
      else
        redirect_to user_path(current_user.id)
      end
    
  end

  def complete
  end

  
  
  def destroy
  end
  
  private

  def user_params
    params.require(:user).permit(:tel,:nickname,:first_name,:last_name,:kana_first_name,:kana_last_name,:birthday_year,:birthday_month,:birthday_day)
  end

  

end
