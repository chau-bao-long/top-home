class Api::ApiController < ActionController::Base
  include ErrorHandler
  include Authenticable
end
