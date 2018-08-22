Rails.application.routes.draw do
  root 'top_home#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: %i(create)
      resources :blogs, only: %i(index create update show)
      resources :photos, only: %i(index create)
    end
  end

  # React router need rails router return some wildcard
  # to single page like this
  get 'portfolio', to: 'top_home#index'
  get 'blogs', to: 'top_home#index'
  get 'iot', to: 'top_home#index'
  get 'blogs/*path', to: 'top_home#index'
  get 'iot/*path', to: 'top_home#index'
end
