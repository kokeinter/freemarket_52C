Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions',
    :passwords => 'users/passwords'
   }
   
   devise_scope :user do
    get 'new'   =>    'users/registrations#new'
  end
  root "items#index"

  resources :users
  resources :items
  resources :addresses ,only:[:new,:create]
  resources :creditcards ,only:[:new,:create]
  get 'complete'   =>    'users#complete'
  
  get '/buy' => 'items#buy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
