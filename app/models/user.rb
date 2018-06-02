class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true, format: {with: /\A([a-zA-Z0-9][\w\.\+\-]*)@([\w.\-]+\.+[\w]{2,})\z/}
  validates :name, presence: true, uniqueness: true
  validates :password, presence: true
  
  has_secure_password

  scope :by_email_or_name, -> email, name { where(email: email).or(where(name: name)) }
end
