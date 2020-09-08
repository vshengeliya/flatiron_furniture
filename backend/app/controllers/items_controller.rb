class ItemsController < ApplicationController
  skip_before_action :authorized

  def index
    items = Item.all
    render json: items
  end

  def show
    item = Item.find(params[:id])
    render json: item
  end

  def create
    item = Item.create(item_params)
    render json: item
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: item
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy!
    render json: {}
  end

  def search

    @items = Item.search_by(params[:q])

=begin
    @items = Item.where("LOWER(description) OR LOWER(title) OR LOWER(category) LIKE ?", "%" + params[:q] + "%")
=end

    render json: @items
  end

  private

  def item_params
    params.require(:item).permit(:image_url, :title, :description, :price, :category)
  end

end