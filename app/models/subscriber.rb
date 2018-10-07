class Subscriber < ApplicationRecord
  validates :email, presence: true, uniqueness: true,
    format: { with: /\A([\w\.%\+\-]+)@([\w.\-]+\.+[\w]{2,})\z/ }
end
