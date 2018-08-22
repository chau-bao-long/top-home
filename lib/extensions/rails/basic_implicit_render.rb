module ActionController
  module BasicImplicitRender # :nodoc:
    def send_action method, *args
      returned_value = super
      case returned_value
      when ActiveRecord::Base, ActiveRecord::Relation, Hash
        render json: returned_value
			when String, Array
				render json: { data: returned_value }
      else
        default_render unless performed?
      end
      response_body
    end
  end
end
