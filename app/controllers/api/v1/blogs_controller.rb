class Api::V1::BlogsController < Api::ApiController
  def create
    Blog.create! blog_params
  end

  def edit
    blog = Blog.find(params[:id])
    blog.update! blog_params
  end

  def index
    current_user.blogs
  end

  def show
    Blog.find(params[:id])
  end

  def blog_params
    params.(:blog).permit(:title, :body)
  end
end
