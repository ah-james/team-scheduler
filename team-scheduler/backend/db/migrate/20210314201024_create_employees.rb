class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :image
      t.integer :years
      t.integer :position_id
      t.integer :title_id

      t.timestamps
    end
  end
end
