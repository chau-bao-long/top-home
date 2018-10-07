require "rails_helper"

RSpec.describe "Test subscribe api", type: :request do
  describe "#subscribe" do
    let(:valid_email) {"email1@email.com"}
    let(:invalid_email) {"42424@ddd"}

    def call_api email
      post "/api/v1/subscribers", params: { email: email }
    end

    context "when email is valid" do
      context "when subscriber doesn't existed" do
        before { call_api valid_email }

        it "should add new subscriber successfully" do
          expect(Subscriber.exists? email: valid_email).to be_truthy
        end

        it "should return ok response" do
          expect_http_status :ok
        end
      end

      context "when email is already existed" do
        before do
          create :subscriber, email: valid_email
          call_api valid_email
        end

        it "should response error" do
          expect_errors codes: [102], messages: ["Validation failed: Email has already been taken"]
        end
      end
    end

    context "when email is invalid" do
      before { call_api invalid_email }

      it "should response error" do
        expect_errors codes: [102], messages: ["Validation failed: Email is invalid"]
      end
    end
  end
end
