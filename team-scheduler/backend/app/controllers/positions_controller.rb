class PositionsController < ApplicationController
    def index
        positions = Position.all
        render json: PositionSerializer.new(positions)
    end
end
