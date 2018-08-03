module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from Api::Errors::Base do |e|
      render_error api_error: e
    end

    rescue_from ActiveRecord::UnknownAttributeError, ActiveRecord::StatementInvalid, JSON::ParserError do |e|
      render_error code: 100, message: e.message, http_status: :internal_server_error
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      model_name = e.model&.constantize&.model_name&.human
      message = model_name.present? ? I18n.t("errors.messages.record_not_found", model: model_name) : e.message
      render_error code: 101, message: message, http_status: :bad_request
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      render_error code: 102, message: e.message, http_status:  :bad_request
    end
  end

  private

  def error code, message
    raise Api::Errors::Base.new(code: code, message: message)
  end

  def render_error api_error: nil, code: nil, message: nil, http_status: :bad_request
    if api_error
      render_errors({code: api_error.code, message: api_error.message}, http_status: http_status)
    else
      render_errors({code: code, message: message}, http_status: http_status)
    end
  end

  def render_errors *errors, http_status: :bad_request
    render json: {
      errors: errors
    }, status: http_status
  end
end
