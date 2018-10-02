module ApiHelper
  def response_body
    @response_body ||= JSON.parse(response.body)
  end

  def error_codes
    response_body["errors"].map { |e| e["code"] }
  end

  def error_messages
    response_body["errors"].map { |e| e["message"] }
  end

  def expect_errors codes: [], messages: []
    expect(error_codes).to include(*codes) unless codes.empty?
    expect(error_messages).to include(*messages) unless messages.empty?
  end

  def expect_http_status http_status
    expect(response).to have_http_status(http_status)
  end

  def expect_response_body response_body
    expect(response.body).to eq response_body
  end
end
