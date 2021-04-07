class AddAwardsToEmployees < ActiveRecord::Migration[6.1]
  def change
    add_column :employees, :awards, :integer
  end
end
