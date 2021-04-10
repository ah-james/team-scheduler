class AddImageColumnToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :image, :string, :default => "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
  end
end
