class TitlesController < ApplicationController
    def index
        titles = Title.all
        render json: TitleSerializer.new(titles)
    end

    def create
        title = Title.new(title_params)
        if title.save
            render json: TitleSerializer.new(title)
        else
            render json: { error: "title didn't save"}
        end
    end

    def destroy
        title = Title.find_by(id: params[:id])
        title.destroy
        render json: { id: params[:id] }
    end

    private

    def title_params
        params.require(:title).permit(:title_name, :description)
    end
end
