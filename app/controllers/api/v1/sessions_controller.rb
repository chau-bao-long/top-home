class Api::V1::SessionsController < Api::ApiController
  def create
    user = User.by_email_or_name(login_params[:email], login_params[:name]).take
    if user&.authenticate login_params[:password]
      session[:user_id] = user.id
      render :no_content
    else
      render status: :bad_request
    end
  end
  
  private 

  def login_params
    params.permit :email, :name, :password
  end
end
