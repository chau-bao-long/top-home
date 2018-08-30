class Api::V1::CommentsController < Api::ApiController
  skip_before_action :authenticate_user!, only: %i(index create)

  def index
    Blog.find(params[:blog_id]).comments
  end

  def create
    Comment.create! blog_id: params[:blog_id],
      author: params[:author],
      content: params[:content]
  end
end
