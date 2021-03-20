class RemovePositionsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :positions
    add_column :employees, :title_id, :integer
    remove_column :titles, :employee_id
  end
end
