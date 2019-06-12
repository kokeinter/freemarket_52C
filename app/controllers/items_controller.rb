class ItemsController < ApplicationController
  before_action :item_params,only:[:create]

  def index
  end

  def new
    @item = Item.new
  end

  def create
    Item.create(name: item_params[:name],text: item_params[:text],image: item_params[:image],condition: item_params[:condition],first_genre_id: item_params[:first_genre_id],second_genre_id: item_params[:second_genre_id],third_genre_id: item_params[:third_genre_id],size: item_params[:size],postage: item_params[:postage],sending_region: item_params[:sending_region],shipping_day: item_params[:shipping_day],price: item_params[:price],shipping_style: item_params[:shipping_style],brand: item_params[:brand],saler_id: current_user.id)
    redirect_to root_path
  end

private

def item_params
  params.require(:item).permit(:name,:text,:image,:condition,:first_genre_id,:second_genre_id,:third_genre_id,:size,:postage,:sending_region,:shipping_day,:price,:shipping_style,:brand)
end

end
