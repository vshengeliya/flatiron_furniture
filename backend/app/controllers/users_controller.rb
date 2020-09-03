class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    puts user
    user.update(user_params)
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :first_name, :last_name, :address, :city, :state)
  end

end