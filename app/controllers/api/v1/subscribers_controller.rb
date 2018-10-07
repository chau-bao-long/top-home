class Api::V1::SubscribersController < Api::ApiController
  skip_before_action :authenticate_user!

  def create
    Subscriber.create! email: params[:email]
  end
end
