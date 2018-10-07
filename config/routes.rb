Rails.application.routes.draw do
  root 'top_home#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: %i(create)
      resources :blogs, only: %i(index create update show destroy) do
        resources :comments, only: %i(index create)
        member do
          post 'claps'
        end
      end
      resources :photos, only: %i(index create)
      resources :subscribers, only: :create
    end
  end

  # React router need rails router return some wildcard
  # to single page like this
  get 'login', to: 'top_home#index'
  get 'portfolio', to: 'top_home#index'
  get 'blogs', to: 'top_home#index'
  get 'iot', to: 'top_home#index'
  get 'blogs/*path', to: 'top_home#index'
  get 'iot/*path', to: 'top_home#index'
end
