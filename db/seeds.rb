# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# https://pm1.narvii.com/7413/0c5b0af4b4193d6ec6bd7d2c3b163f0af27c46a6r4-600-300_00.jpg soul society
# HUECO_MUNDO

puts 'seeding...'

Store.create!(name: Faker::Lorem.word, picture: 'https://ecdn.teacherspayteachers.com/thumbitem/Among-Us-Digital-Slope-Pixel-Art-Practice-6221026-1657338937/original-6221026-1.jpg', password: '123456', password_confirmation: '123456')
Store.create!(name: Faker::Lorem.word, picture:' https://www.seekpng.com/png/detail/312-3124209_pokeball-pixel-art-easy-cool-pixel-art.png', password: '123456', password_confirmation: '123456')
Store.create!(name: Faker::Lorem.word, picture:' https://pixelart123.de/wp-content/uploads/2022/06/Ghostface-pixel-art.png', password: '123456', password_confirmation: '123456')
Store.create!(name: Faker::Lorem.word, picture:' https://www.nicepng.com/png/detail/808-8087148_eh-whats-up-doc-simple-pixel-art-minecraft.png', password: '123456', password_confirmation: '123456')
Store.create!(name: Faker::Lorem.word, picture:' https://content.instructables.com/F8V/I30I/I6AVPSFG/F8VI30II6AVPSFG.jpg?auto=webp&fit=bounds&frame=1', password: '123456', password_confirmation: '123456')

first_store = Store.first.id
fifth_store = Store.fifth.id


# print random_store
50.times do 
  Item.create!(name: Faker::Lorem.word, picture:' https://www.seekpng.com/png/detail/312-3124209_pokeball-pixel-art-easy-cool-pixel-art.png', price: rand(20..100), user_id: 'null', store_id: rand(first_store..fifth_store) )
end

puts 'done'