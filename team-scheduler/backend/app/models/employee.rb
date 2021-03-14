class Employee < ApplicationRecord
    has_many :positions
    has_many :titles
end
