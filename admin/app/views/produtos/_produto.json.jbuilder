json.extract! produto, :id, :nome, :preco, :destaque, :created_at, :updated_at
json.url produto_url(produto, format: :json)
