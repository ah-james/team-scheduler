# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Employee.create(name: 'Tony Stark', image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.cinemablend.com%2Ffilter%3Ascale%2Fquill%2Fd%2F9%2F5%2Fa%2Fc%2F9%2Fd95ac9d6f0acd56e12b9452301c763cd1aeffe51.jpg%3Fmw%3D600&imgrefurl=https%3A%2F%2Fwww.cinemablend.com%2Fnews%2F2471343%2Fapparently-robert-downey-jr-didnt-want-to-do-tony-starks-last-big-line-in-avengers-endgame&tbnid=cvAv9wBiPbph3M&vet=12ahUKEwjWw8KNybXvAhWDGd8KHcpuDVAQMygCegUIARDZAQ..i&docid=Q3SNQoywtwf0gM&w=600&h=300&q=tony%20stark&ved=2ahUKEwjWw8KNybXvAhWDGd8KHcpuDVAQMygCegUIARDZAQ', years: 4)

Position.create(position: "Register", employee_id: 1)

Title.create(title: 'frontend', employee_id: 1)