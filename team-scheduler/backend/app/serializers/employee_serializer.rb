class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :years, :position_id, :title_id
  has_many :positions, :titles
end
