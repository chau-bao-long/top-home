class Blog < ApplicationRecord
  belongs_to :user

  has_many :comments

  def claps
    update! clap: clap + 1
  end
end
