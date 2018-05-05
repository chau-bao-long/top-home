policy.connect_src :self, :https, "http://localhost:3000", "ws://localhost:3000" if Rails.env.development?
