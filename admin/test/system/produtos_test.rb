require "application_system_test_case"

class ProdutosTest < ApplicationSystemTestCase
  setup do
    @produto = produtos(:one)
  end

  test "visiting the index" do
    visit produtos_url
    assert_selector "h1", text: "Produtos"
  end

  test "should create produto" do
    visit produtos_url
    click_on "New produto"

    check "Destaque" if @produto.destaque
    fill_in "Nome", with: @produto.nome
    fill_in "Preco", with: @produto.preco
    click_on "Create Produto"

    assert_text "Produto was successfully created"
    click_on "Back"
  end

  test "should update Produto" do
    visit produto_url(@produto)
    click_on "Edit this produto", match: :first

    check "Destaque" if @produto.destaque
    fill_in "Nome", with: @produto.nome
    fill_in "Preco", with: @produto.preco
    click_on "Update Produto"

    assert_text "Produto was successfully updated"
    click_on "Back"
  end

  test "should destroy Produto" do
    visit produto_url(@produto)
    click_on "Destroy this produto", match: :first

    assert_text "Produto was successfully destroyed"
  end
end
