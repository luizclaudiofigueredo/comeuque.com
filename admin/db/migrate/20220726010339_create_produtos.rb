class CreateProdutos < ActiveRecord::Migration[7.0]
  def change
    create_table :produtos do |t|
      t.string :titulo
      t.text :descricao
      t.float :preco
      t.references :grupo, null: false, foreign_key: true
      t.integer :ativo

      t.timestamps
    end
  end
end
