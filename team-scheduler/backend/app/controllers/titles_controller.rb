class TitlesController < ApplicationController
    def index
        titles = Title.all
        render json: TitleSerializer.new(titles)
    end
end
