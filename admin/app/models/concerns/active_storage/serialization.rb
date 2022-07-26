# app/models/concerns/active_storage/serialization.rb
module ActiveStorage
    module Serialization
      def serializable_hash(options = nil)
        attached? ? attachment.serializable_hash(options) : nil
      end
    end
  end