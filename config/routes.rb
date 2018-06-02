Rails.application.routes.draw do
  root 'top_home#index'

  get '*path', to: 'top_home#index'

  namespace :api do
    namespace :v1 do
      resources :sessions, only: %i(create)
    end
  end
end
