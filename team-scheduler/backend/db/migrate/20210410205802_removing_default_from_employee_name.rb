class RemovingDefaultFromEmployeeName < ActiveRecord::Migration[6.1]
  def change
    remove_column :employees, :name
    add_column :employees, :name, :string
  end
end
