class ItemsController < ApplicationController
  before_action :item_params,only:[:create]

  def index
    @items=Item.all
    

  end

  def new
    @item = Item.new
    10.times{@item.images.build}
  end

  def create
    @item=Item.create(item_params)
    redirect_to root_path
  end
  def buy
  end
  def show
    @item=Item.find(params[:id])
    @user=User.find(@item.saler_id)
    @first=FirstGenre.find(@item.first_genre_id)
    @second=SecondGenre.find(@item.second_genre_id)
    @third=ThirdGenre.find(@item.third_genre_id)
    @comment=Comment.new
    @comments=@item.comments
  end
  def before_edit
    @item=Item.find(params[:id])
    @user=User.find(current_user.id)
    @first=FirstGenre.find(@item.first_genre_id)
    @second=SecondGenre.find(@item.second_genre_id)
    @third=ThirdGenre.find(@item.third_genre_id)
    @comment=Comment.new
    @comments=@item.comments
  end

  def edit
    @item = Item.find(params[:id])
  end
  def update
    item=Item.find(params[:id])
    item.update(item_params)
    redirect_to root_path
  end
  def destroy
    Item.delete(params[:id])
    redirect_to "/users/#{current_user.id}/items_status" ,notice: '商品を削除しました'
  end

private

def item_params
  params.require(:item).permit(:name,:text,:condition,:first_genre_id,:second_genre_id,:third_genre_id,:size,:postage,:sending_region,:shipping_day,:price,:shipping_style,:brand,images_attributes:[:image]).merge(saler_id: current_user.id)

end

end
