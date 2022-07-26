class Slide < ApplicationRecord

  has_one_attached :url_slide
  
  def my_url_slide
    Rails.application.routes.url_helpers.rails_blob_path(url_slide, only_path: true)
  end

end
