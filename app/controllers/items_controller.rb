class ItemsController < ApplicationController
  before_action :item_params,only:[:create]
  before_action :edit_params,only:[:update]

  def index
    @items = Item.all.order("id DESC")
  end

  def new
    @item = Item.new
    10.times{@item.images.build}
    @parents = Category.where(ancestry: nil).order("id ASC")
  end

  def create
    @item=Item.create(item_params)
    redirect_to root_path
  end

  def buy
  end
  
  def done
  end

  def show
    @item=Item.find(params[:id])
    @images=@item.images
    @user=User.find(@item.saler_id)
    @first=Category.find(@item.first_genre_id)
    @second=Category.find(@item.second_genre_id)
    @third=Category.find(@item.third_genre_id)
    @comment=Comment.new
    @comments=@item.comments
  end
  def before_edit
    @item=Item.find(params[:id])
    @images=@item.images
    @user=User.find(current_user.id)
    @first=Category.find(@item.first_genre_id)
    @second=Category.find(@item.second_genre_id)
    @third=Category.find(@item.third_genre_id)
    @comment=Comment.new
    @comments=@item.comments
  end

  def edit
    @item = Item.find(params[:id])
    10.times{@item.images.build}
    @images=Image.where("item_id=?",@item.id)
    @images_length=@images.length
  end
  def update
    item=Item.find(params[:id])
    @images=Image.where("item_id=?",item.id)
    @images.each_with_index do |image,id|
      if image_params[:images_attributes][:"#{id}"][:image].present?
      Image.create(item_id:params[:id],image: image_params[:images_attributes][:"#{id}"][:image])
      end
    end
    
    delete_ids=params[:delete_images]
    if delete_ids.present?
      delete_ids.each do |id|
      Image.delete(id)
      end
    end
    item.update(edit_params)
    redirect_to root_path
  end
  def destroy
    Item.delete(params[:id])
    redirect_to "/users/#{current_user.id}/items_status" ,notice: '商品を削除しました'
  end


  def pay
    price = Item.find(params[:id]).price
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    Payjp::Charge.create(
      amount: price,
      card: params['payjp-token'],
      currency: 'jpy'
    )
  end


private

def item_params
  params.require(:item).permit(:name,:text,:condition,:first_genre_id,:second_genre_id,:third_genre_id,:size,:postage,:sending_region,:shipping_day,:price,:shipping_style,:brand,images_attributes:[:image]).merge(saler_id: current_user.id)
end

def edit_params
  params.require(:item).permit(:name,:text,:condition,:first_genre_id,:second_genre_id,:third_genre_id,:size,:postage,:sending_region,:shipping_day,:price,:shipping_style,:brand).merge(saler_id: current_user.id)
end

def image_params
  params.require(:item).permit(images_attributes:[:image])
end

end
