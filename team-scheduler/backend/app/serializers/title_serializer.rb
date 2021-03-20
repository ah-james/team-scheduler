class TitleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  has_many :employees
end
