Rails.application.routes.draw do
	namespace :api do
  		resources :guesses, except:[:destroy]
  		get '/current_weather', to: 'weather#current_weather'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	end
end