json.extract! produto, :id, :titulo, :descricao, :preco, :grupo_id, :ativo, :created_at, :updated_at
json.url produto_url(produto, format: :json)
