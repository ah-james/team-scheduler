# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Employee.create(name: 'Tony Stark', image: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg', years: 4, title_id: 3)
Employee.create(name: 'Thor Odinsson', image: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg', years: 1, title_id: 4)

# job titles
Title.create(title: "Frontend")
Title.create(title: "Kitchen")
Title.create(title: "Waitstaff")
Title.create(title: "Manager")
Title.create(title: "Busboy")