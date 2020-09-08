class CartsController < ApplicationController

  skip_before_action :authorized

  def index
    carts = Cart.all
    render json: carts
  end

  def create
    cart = Cart.create(cart_params)
    render json: cart
  end

  def update
    cart = Cart.find(params[:id])
    cart.update(cart_params)
    render json: cart
  end

  def destroy
    cart = Cart.find(params[:id])
    cart.destroy!
    render json: {}
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id, :item_id, :quantity)
  end

end