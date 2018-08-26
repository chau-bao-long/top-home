class Blog < ApplicationRecord
  belongs_to :user

  def claps
    update! clap: clap + 1
  end
end
