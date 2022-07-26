class Produto < ApplicationRecord
  belongs_to :grupo

  has_one_attached :imagem
  
  def imagem_produto
    Rails.application.routes.url_helpers.rails_blob_path(imagem, only_path: true)
  end  
end
