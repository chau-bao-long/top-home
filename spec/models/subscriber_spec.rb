require 'rails_helper'

RSpec.describe Subscriber, type: :model do
  describe "validations" do
    it {is_expected.to validate_presence_of :email}
    it {is_expected.to validate_uniqueness_of :email}
  end
end
