class MovingForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_column :positions, :employee_id, :integer
    add_column :titles, :employee_id, :integer
    remove_column :employees, :position_id, :integer
    remove_column :employees, :title_id, :integer

  end
end
