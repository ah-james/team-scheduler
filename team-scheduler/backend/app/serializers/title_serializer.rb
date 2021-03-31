class TitleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title_name, :description
  has_many :employees
end
