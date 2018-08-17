module ActionController
  module BasicImplicitRender # :nodoc:
    def send_action method, *args
      returned_value = super
      case returned_value
      when ActiveRecord::Base
        render json: returned_value
      else
        default_render unless performed?
      end
      response_body
    end
  end
end
