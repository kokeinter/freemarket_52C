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
  get "buy" => "items#buy"
  get "users/:id/mypage" => "users#mypage"
  get "users/:id/info" => "users#info"
  resources :addresses ,only:[:new,:create]
  resources :creditcards ,only:[:new,:create]
  get 'complete'   =>    'users#complete'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
