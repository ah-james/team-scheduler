class Employee < ApplicationRecord
    belongs_to :title

    validates :name, presence: true
    validates :image, presence: true
end
