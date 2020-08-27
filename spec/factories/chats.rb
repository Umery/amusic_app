FactoryBot.define do
  factory :chat do
    category_id { Faker::Number.within(range: 2..13) }
    title { Faker::Name.initials }
    content { Faker::Lorem.sentence }
    image { 'images/Fake.png' }
    association :user
  end
end