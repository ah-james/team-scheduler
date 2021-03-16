class EmployeeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :years
  has_many :positions
  has_many :titles
end
