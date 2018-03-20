class CreateAtividades < ActiveRecord::Migration[5.1]
  def change
    create_table :atividades do |t|
      t.string :nome
      t.text :descricao
      t.datetime :inicio
      t.datetime :fim
      t.string :estado

      t.timestamps
    end
  end
end
