class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :years, :title_id
  belongs_to :title
end
