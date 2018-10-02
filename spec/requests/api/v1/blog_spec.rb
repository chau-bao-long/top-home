require "rails_helper"

RSpec.describe "Test blog api", type: :request do
  include_context "authenticated user"

  describe "#DELETE blog" do
    let(:blog) { create :blog }
    let(:unexisted_blog_id) { blog.id + 1 }

    context "when blog exists" do
      before do
        delete "/api/v1/blogs/#{blog.id}"
      end
      it "should delete blog successfully" do
        expect(Blog.exists? blog.id).to be_falsy
      end
    end

    context "when blog does not exists" do
      before do
        delete "/api/v1/blogs/#{unexisted_blog_id}"
      end
      it "should response error" do
        expect_errors messages: [I18n.t('errors.messages.record_not_found')]
      end
    end
  end
end
