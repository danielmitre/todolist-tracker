Rails.application.routes.draw do
  resources :atividades
  root 'atividades#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
