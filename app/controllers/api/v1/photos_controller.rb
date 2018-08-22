class Api::V1::PhotosController < Api::ApiController
  def index
		current_user.photos.map{ |p| url_for(p) }
  end

  def create
    current_user.photos.attach photo_params
    rails_blob_path(current_user.photos.last)
  end

  private

  def photo_params
    params.require(:photo)
  end
end
