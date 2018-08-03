class Api::Errors::Base < StandardError
  attr_reader :code

  def initialize message:, code:
    super message
    @code = code
  end
end
