class AddingDefaultsToEmployeesTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :employees, :name
    add_column :employees, :name, :string, :default => "Unknown Employee"
    
    remove_column :employees, :image
  end
end
