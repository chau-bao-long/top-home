class Api::V1::BlogsController < Api::ApiController
  def create
    Blog.create! blog_params
  end

  def edit
    current_user.blogs.where(params[:id]).tap do |blog|
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
    params.(:blog).permit(:title, :body)
  end
end
