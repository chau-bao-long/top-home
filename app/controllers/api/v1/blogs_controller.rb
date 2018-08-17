class Api::V1::BlogsController < Api::ApiController
  def create
    current_user.blogs.create! blog_params
  end

  def update
    current_user.blogs.find(params[:id]).tap do |blog|
      blog.update! blog_params
    end
  end

  def index
    current_user.blogs
  end

  def show
    current_user.blogs.where(id: params[:id])
  end

  def blog_params
    params.permit(:title, :body)
  end
end
