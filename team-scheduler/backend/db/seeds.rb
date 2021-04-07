# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# employee names
Employee.create(name: 'Ted Lasso', image: 'https://www.thehindu.com/entertainment/movies/430fvs/article32669208.ece/ALTERNATES/LANDSCAPE_1200/ted-lasso', years: 4, title_id: 1, awards: 0)
Employee.create(name: 'Rebecca Welton', image: 'https://pbs.twimg.com/media/EmV667jWMAIX4Yb.jpg', years: 5, title_id: 2, awards: 0)
Employee.create(name: 'Leslie Higgins', image: 'https://static.wikia.nocookie.net/ted-lasso/images/f/f7/Higgins.jpg/revision/latest/top-crop/width/360/height/450?cb=20200905034405', years: 2, title_id: 3, awards: 0)
Employee.create(name: 'Jamie Tartt', image: 'https://static.wikia.nocookie.net/ted-lasso/images/4/4f/MP-Jamie.jpg/revision/latest/top-crop/width/300/height/300?cb=20200804234446', years: 1, title_id: 4, awards: 0)
Employee.create(name: 'Roy Kent', image: 'https://nypost.com/wp-content/uploads/sites/2/2020/08/ted-lasso-02-1.jpeg?quality=80&strip=all', years: 3, title_id: 5, awards: 0)
Employee.create(name: 'Coach Beard', image: 'https://static.wikia.nocookie.net/ted-lasso/images/c/cb/Coach_Beard.jpg/revision/latest/top-crop/width/360/height/450?cb=20200905034404', years: 7, title_id: 1, awards: 0)
Employee.create(name: 'Nathan Shelley', image: 'https://pbs.twimg.com/profile_images/1303086004727951362/0pCDP-hm_400x400.jpg', years: 5, title_id: 2, awards: 0)
Employee.create(name: 'Keeley Jones', image: 'https://static.wikia.nocookie.net/ted-lasso/images/c/ca/Keeley_Jones.jpg/revision/latest/top-crop/width/360/height/450?cb=20200905040103', years: 8, title_id: 3, awards: 0)

# job titles
Title.create(title_name: "Frontend", description: 'Staffs cash register, greets customers as they walk in')
Title.create(title_name: "Kitchen", description: 'Prepares food for customers, maintains cleanliness of work area')
Title.create(title_name: "Waitstaff", description: 'Takes customer orders, regularly checks on customer experience')
Title.create(title_name: "Manager", description: 'Manages all employees on duty, floats to any position as necessary')
Title.create(title_name: "Busboy", description: 'Cleans dining area as tables of customers leave')