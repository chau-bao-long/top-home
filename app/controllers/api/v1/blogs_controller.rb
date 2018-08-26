class Api::V1::BlogsController < Api::ApiController
  skip_before_action :authenticate_user!, only: %i(index show)

  def create
    current_user.blogs.create! blog_params
  end

  def update
    current_user.blogs.find(params[:id]).tap do |blog|
      blog.update! blog_params
    end
  end

  def index
    Blog.all
  end

  def show
    Blog.find params[:id]
  end

  def claps
    Blog.find(params[:id]).tap(&:claps)
  end

  private

  def blog_params
    params.permit(:title, :body)
  end
end
