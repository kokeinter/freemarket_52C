class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname,:first_name,:last_name,:kana_first_name,:kana_last_name,:birthday_year,:birthday_month,:birthday_day])
  end
end
