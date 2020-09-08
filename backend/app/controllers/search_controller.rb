class SearchController < ApplicationController

  def search
    @items = Item.search_by_term(params[:query])
    render json: @items
  end

end
