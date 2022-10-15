# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts '🌱 Mike seeding data....'

#users
user = User.create(username:"mike",password_digest:"kaburumichael")

#vehicles
vehicle1 = Vehicle.create(name: "Suv",image:"https://images.unsplash.com/photo-1610587144035-4ce2cefe4051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1dnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",price:"50",damage_rate:"large",is_in_display: true)
vehicle2 = Vehicle.create(name: "Suv",image:"https://images.unsplash.com/photo-1598248691267-4a62dfdfd8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3V2fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",price:"25",damage_rate:"small",is_in_display: true)
vehicle3 = Vehicle.create(name: "Car",image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",price:"35",damage_rate:"small",is_in_display: true)
vehicle4 = Vehicle.create(name: "Car",image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",price:"25",damage_rate:"large",is_in_display: true)
vehicle5 = Vehicle.create(name: "Van",image:"https://images.unsplash.com/photo-1535655685871-dc8158ff167e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",price:"60",damage_rate:"large",is_in_display: true)
vehicle6 = Vehicle.create(name: "Van",image:"https://images.unsplash.com/photo-1583797227225-4233106c5a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",price:"40",damage_rate:"small",is_in_display: true)
vehicle7 = Vehicle.create(name: "Tractor",image:"https://images.unsplash.com/photo-1575236317427-1da36112fa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWN0b3J8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",price:"80",damage_rate:"large",is_in_display: true)
vehicle8 = Vehicle.create(name: "Tractor",image:"https://images.unsplash.com/photo-1580311890367-c1f180fe4fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhY3RvcnN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",price:"60",damage_rate:"small",is_in_display: true)
vehicle9 = Vehicle.create(name: "Truck",image:"https://images.unsplash.com/photo-1605705658744-45f0fe8f9663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRydWNrfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",price:"80",damage_rate:"large",is_in_display: true)

#requests
request = Request.create(name:"car",location:"Thika Road",phone:"0796225100",user_id:user.id)

puts '....✅ Mike done seeding data'