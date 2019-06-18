Rails.application.routes.draw do
  devise_for :users, :controllers => {
    :registrations => 'users/registrations',
    :sessions => 'users/sessions',
    :passwords => 'users/passwords'
   }
   
  root "items#index"
   devise_scope :user do
    get 'new'   =>    'users/registrations#new'
  end

  resources :users do
    member do
      get "items_status"
    end
    collection do
      get "mypage","complete","logout","info"
    end
  end

  resources :items do
    member do
      get "buy","before_edit"
    end
    resources :comments, only: [:create]
  end
  
  resources :addresses ,only:[:new,:create]
  resources :creditcards ,only:[:new,:create]


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
