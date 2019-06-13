class UsersController < ApplicationController
  def new
    @user = User.new
  end
  def mypage
  end
  def index
  end
  def show
    @user = User.find(current_user.id)
  end

  def update
    user = User.find(current_user.id)
    user.update(user_params) 
    redirect_to new_address_path
  end

  def complete
  end
  def info
  end

  
  
  def destroy
  end
  
  private

  def user_params
    params.require(:user).permit(:tel,:nickname,:first_name,:last_name,:kana_first_name,:kana_last_name,:birthday_year,:birthday_month,:birthday_day)
  end

  

end
