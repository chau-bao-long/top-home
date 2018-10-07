class Blog < ApplicationRecord
  belongs_to :user

  has_many :comments, dependent: :nullify

  def claps
    update! clap: clap + 1
  end
end
