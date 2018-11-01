require 'sinatra/base'

class App < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/' do
    session[:temperature] = params[:temperature]
    session[:psm] = params[:psm]
    session[:city] = params[:city]
  end

  get '/retrieve' do
    JSON.generate({
      temperature: session[:temperature] || 20,
      psm: session[:psm] || 'Power Save Off',
      city: session[:city] || 'London'
      })
  end

  run! if app_file == $0
end
