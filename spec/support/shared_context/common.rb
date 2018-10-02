RSpec.shared_context "authenticated user" do
  let(:user) { create :user } 

  before do
    allow(User).to receive(:find_by).and_return(blog.user)
  end
end
