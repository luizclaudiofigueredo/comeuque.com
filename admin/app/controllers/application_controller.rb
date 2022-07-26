class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session

    respond_to :json
  
    before_action :underscore_params!
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :authenticate_usuario    

    private
    
    def underscore_params!
        params.deep_transform_keys!(&:underscore)
    end    

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:email])
    end  
    
    def authenticate_usuario
        if request.headers['Authorization'].present?
          authenticate_or_request_with_http_token do |token|
            begin
              jwt_payload = JWT.decode(token, Rails.application.secrets.secret_key_base).first
    
              @current_usuario_id = jwt_payload['id']
            rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
              head :unauthorized
            end
          end
        end
    end
    
    def authenticate_usuario!(options = {})
        head :unauthorized unless signed_in?
    end

    def current_usuario
        @current_usuario ||= super || Usuario.find(@current_usuario_id)
    end

    def signed_in?
        @current_usuario_id.present?
    end    

end
