class TitlesController < ApplicationController
    def index
        titles = Title.all
        render json: TitleSerializer.new(titles)
    end

    def create
        title = Title.find_by(id: params[:id])
        if title.save
            render json: TitleSerializer.new(title)
        else
            render json: { error: "title didn't save"}
        end
    end

    def destroy
        title = Title.find_by(id: params[:id])
        title.destroy
        render json: { error: "title didn't delete" }
    end
end
