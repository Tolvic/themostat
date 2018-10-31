require 'sinatra/base'

class App < Sinatra::Base
  enable :sessions

  # session[:temperature]

  get '/' do
    @temperature = session[:temperature] || 20
    @psm = session[:psm] || "Power Save Off"
    erb :index
  end

  post '/' do
    session[:temperature] = params[:temperature]
    session[:psm] = params[:psm]
  end

  run! if app_file == $0
end
