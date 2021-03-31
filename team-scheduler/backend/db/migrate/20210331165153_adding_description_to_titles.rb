class AddingDescriptionToTitles < ActiveRecord::Migration[6.1]
  def change
    add_column :titles, :description, :string
    rename_column :titles, :title, :title_name
  end
end
