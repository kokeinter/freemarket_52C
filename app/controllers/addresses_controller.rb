class AddressesController < ApplicationController
  def new
    @address = Address.new
  end
  def create
    Address.create(post_id: address_params[:post_id],prefecture: address_params[:prefecture],city: address_params[:city],address: address_params[:address],building: address_params[:building],user_id:current_user.id,first_name: address_params[:first_name],last_name: address_params[:last_name],kana_first_name: address_params[:kana_first_name],kana_last_name: address_params[:kana_last_name])
    redirect_to new_creditcard_path
  end

  private

  def address_params
    params.require(:address).permit(:post_id,:prefecture,:city,:address,:building,:first_name,:last_name,:kana_first_name,:kana_last_name)
  end
end
