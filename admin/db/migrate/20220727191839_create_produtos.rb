class CreateProdutos < ActiveRecord::Migration[7.0]
  def change
    create_table :produtos do |t|
      t.string :nome
      t.float :preco
      t.boolean :destaque

      t.timestamps
    end
  end
end
