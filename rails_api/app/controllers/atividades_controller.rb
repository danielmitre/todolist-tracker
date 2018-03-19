class AtividadesController < ApplicationController
  before_action :set_atividade, only: [:show, :update, :destroy]

  # GET /atividades
  def index
    @atividades = Atividade.all

    render json: @atividades
  end

  # GET /atividades/1
  def show
    render json: @atividade
  end

  # POST /atividades
  def create
    @atividade = Atividade.new(atividade_params)

    if @atividade.save
      render json: @atividade, status: :created, location: @atividade
    else
      render json: @atividade.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /atividades/1
  def update
    if @atividade.update(atividade_params)
      render json: @atividade
    else
      render json: @atividade.errors, status: :unprocessable_entity
    end
  end

  # DELETE /atividades/1
  def destroy
    @atividade.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_atividade
      @atividade = Atividade.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def atividade_params
      params.require(:atividade).permit(:nome, :descricao, :inicio, :fim, :estado)
    end
end
