require 'sinatra/base'

class App < Sinatra::Base
  enable :sessions

  # session[:temperature]

  get '/' do
    @temperature = session[:temperature] || 20
    @psm = session[:psm] || 'Power Save Off'
    @city = session[:city] || 'London'
    erb :index
  end

  post '/' do
    session[:temperature] = params[:temperature]
    session[:psm] = params[:psm]
    session[:city] = params[:city]
  end

  run! if app_file == $0
end
