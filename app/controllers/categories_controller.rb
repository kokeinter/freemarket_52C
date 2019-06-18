class CategoriesController < ApplicationController

  # 出品画面　カテゴリajax追加

  # セカンドジャンル
  def index
    respond_to do |format|
      format.html
      format.json do
        @children = Category.find(params[:parent_id]).children
      end
    end
  end

  # サードジャンル
  def show
    respond_to do |format|
      format.html
      format.json do
        @grandchildren = Category.find(params[:child_id]).children
      end
    end
  end

end
