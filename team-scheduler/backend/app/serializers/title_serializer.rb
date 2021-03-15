class TitleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  belongs_to :employee
end
