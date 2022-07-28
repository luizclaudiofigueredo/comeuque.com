class Produto < ApplicationRecord

  has_one_attached :imageURL
  
  def my_imageURL
    Rails.application.routes.url_helpers.rails_blob_path(imageURL, only_path: true)
  end

end
