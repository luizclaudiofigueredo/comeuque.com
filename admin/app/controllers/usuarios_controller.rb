class UsuariosController < ApplicationController
    before_action :authenticate_usuario!

    def show
    end
    
    def update
      if current_usuario.update_attributes(usuario_params)
        render :show
      else
        render json: { errors: current_usuario.errors }, status: :unprocessable_entity
      end
    end    

    private

    def usuario_params
      params.require(:usuario).permit( :email, :password )
    end    
  end