require 'test_helper'

class AtividadesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @atividade = atividades(:one)
  end

  test "should get index" do
    get atividades_url, as: :json
    assert_response :success
  end

  test "should create atividade" do
    assert_difference('Atividade.count') do
      post atividades_url, params: { atividade: { descricao: @atividade.descricao, estado: @atividade.estado, fim: @atividade.fim, inicio: @atividade.inicio, nome: @atividade.nome } }, as: :json
    end

    assert_response 201
  end

  test "should show atividade" do
    get atividade_url(@atividade), as: :json
    assert_response :success
  end

  test "should update atividade" do
    patch atividade_url(@atividade), params: { atividade: { descricao: @atividade.descricao, estado: @atividade.estado, fim: @atividade.fim, inicio: @atividade.inicio, nome: @atividade.nome } }, as: :json
    assert_response 200
  end

  test "should destroy atividade" do
    assert_difference('Atividade.count', -1) do
      delete atividade_url(@atividade), as: :json
    end

    assert_response 204
  end
end
