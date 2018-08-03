module Authenticable
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user!

    def authenticate_user!
      @user = User.find_by_id session[:user_id]
      @user || error(103, "authentication fails")
    end

    def current_user
      @user
    end
  end
end
