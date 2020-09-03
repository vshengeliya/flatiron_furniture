class Api::V1::UsersController < ApplicationController

  def create
    @user = User.create(user_params)

    if @user.valid?
      render json: { user: UserSerializer.new(@user) }, status: :created
    else
      render json: { error: 'Failed to create user' }, status: :not_acceptable
    end
  end

  def profile
    @user = User.find(params[:id])
    render json: @user
  end

  def user_params
    params.require(:user).permit(:username,
                                 :password,
                                 :first_name,
                                 :last_name,
                                 :address,
                                 :city,
                                 :state)
  end
end
