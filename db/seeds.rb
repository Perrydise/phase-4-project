# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.create(name: "Jackson Hole", location: "Wyoming")
Mountain.create(name: "Park City", location: "Utah")
Mountain.create(name: "Steamboat", location: "Colorado")

Review.create(body: "It's a giant mountain with good snow", user_id: "1", username: "Admin", mountain_id: "1"  )