class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def as_json options = nil
    super.transform_keys!{ |k| k.to_s.camelize(:lower) }
  end
end
