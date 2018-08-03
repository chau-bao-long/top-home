class Api::V1::SessionsController < Api::ApiController
  skip_before_action :authenticate_user!

  def create
    user = User.by_email_or_name(login_params[:email], login_params[:name]).take
    error 103, "Wrong email or password" unless user&.authenticate login_params[:password]
    cookies.signed[:is_auth] = true
    session[:user_id] = user.id
    user
  end

  private

  def login_params
    params.permit :email, :name, :password
  end
end
