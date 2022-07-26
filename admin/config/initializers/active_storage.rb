Rails.application.config.to_prepare do
  ActiveStorage::Attached::One.include ActiveStorage::Serialization
end