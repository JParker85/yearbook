class UsersController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :set_user, only: :show
  respond_to :json

  def index
    @users = User.all
    respond_with @users
  end

  def show
    respond_with @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
