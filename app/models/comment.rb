class Comment < ApplicationRecord
  belongs_to :blog

  validates :author, :content, presence: true
end
