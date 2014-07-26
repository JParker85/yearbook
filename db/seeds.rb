# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


30.times do |n|
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'testtest',
    github: "ghuser1#{n}",
    linked_in: "liuser1#{n}",
    course: "Ruby on Rails",
    cohort: "Summer 2014",
    bio: Faker::Lorem.paragraph,
    admin: false)
end
