Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :students, only: [:index, :create, :destroy, :update]
      resources :professors
    end
  end
end
