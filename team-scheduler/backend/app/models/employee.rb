class Employee < ApplicationRecord
    belongs_to :title

    after_initialize :default_values

    private

    def default_values
        self.name = "Unknown Employee" if self.name.nil?
        self.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" if self.image.nil?
        self.title_id = 2 if self.title_id.nil?
    end
end
