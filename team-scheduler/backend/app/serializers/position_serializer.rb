class PositionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :position, :employee_id
  belongs_to :employee
end
