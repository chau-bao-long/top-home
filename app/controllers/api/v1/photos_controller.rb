class Api::V1::PhotosController < Api::ApiController
  def index
    {
      photos: current_user.photos.map{ |p| rails_blob_path(p) }
    }
  end

  def create
    current_user.photos.attach photo_params
    {
      photo: rails_blob_path(current_user.photos.last)
    }
  end

  private

  def photo_params
    params.require(:photo)
  end
end
