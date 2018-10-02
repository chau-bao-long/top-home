FactoryBot.define do
  factory :blog do
    title "This is blog title"
    body "This is super long body."
    user { User.first || association(:user) }
    clap 30
  end
end
