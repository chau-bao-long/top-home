require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do
  before do
    create :user
  end

  let(:right_account){"top"}
  let(:right_password){"123456"}
  let(:wrong_password){"1234561"}

  describe "POST create" do
    it "should login fail with wrong password" do
      post :create, params: {name: right_account, password: wrong_password}
      expect(response.code).to eq "400"
    end
  end
end
