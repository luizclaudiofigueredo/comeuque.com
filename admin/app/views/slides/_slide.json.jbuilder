json.extract! slide, :id, :titulo, :descricao, :my_url_slide, :created_at, :updated_at
json.url slide_url(slide, format: :json)
