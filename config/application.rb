require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TopHome
  class Application < Rails::Application
    config.load_defaults 5.1
		config.cache_store = :redis_store
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins /\Ahttp:\/\/localhost(:\d+)?\z/,
          /\Ahttp:\/\/127\.0\.0\.1(:\d+)?\z/,
          /\Ahttps:\/\/(.*)?topcbl\.design\z/
        resource "*",
          methods: [:get, :post, :put, :delete, :patch, :head, :options],
          headers: :any,
          expose: ["X-Api-Response-At", "x-api-responsed-at"]
      end
    end
  end
end
