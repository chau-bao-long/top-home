module Authenticable
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user!

    def authenticate_user!
      @user = User.find_by id: session[:user_id]
      @user || begin
        cookies.delete :is_auth
        session[:user_id] = nil
        error(103, "authentication fails")
      end
    end

    def current_user
      @user
    end
  end
end
