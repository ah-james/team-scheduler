class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :years, :title_id, :awards
  belongs_to :title
end
