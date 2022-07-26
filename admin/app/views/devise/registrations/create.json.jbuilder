json.usuario do |json|
  json.partial! 'usuarios/usuario', usuario: current_usuario
end