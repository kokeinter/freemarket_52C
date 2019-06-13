Rails.application.routes.draw do
  devise_for :users
  root "items#index"

  resources :users
  resources :items
  get "buy" => "items#buy"
  get "users/:id/mypage" => "users#mypage"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
