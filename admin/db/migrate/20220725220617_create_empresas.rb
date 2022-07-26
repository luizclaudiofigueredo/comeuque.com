class CreateEmpresas < ActiveRecord::Migration[7.0]
  def change
    create_table :empresas do |t|
      t.string :nome
      t.string :endereco
      t.string :telefone
      t.string :email
      t.string :facebook
      t.string :instagram
      t.string :youtube
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
