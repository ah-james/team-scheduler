class TitleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :employee_id
  belongs_to :employee
end
