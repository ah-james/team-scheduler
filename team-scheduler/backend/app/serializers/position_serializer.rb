class PositionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :position
  belongs_to :employee
end
