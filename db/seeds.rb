
puts 'seeding...'

Store.create!(name: 'Imposterus', picture: 'https://ecdn.teacherspayteachers.com/thumbitem/Among-Us-Digital-Slope-Pixel-Art-Practice-6221026-1657338937/original-6221026-1.jpg', password: '123456', password_confirmation: '123456')
Store.create!(name: 'Pokeballer', picture:' https://www.seekpng.com/png/detail/312-3124209_pokeball-pixel-art-easy-cool-pixel-art.png', password: '123456', password_confirmation: '123456')
Store.create!(name: 'Ghostfacepro', picture:' https://pixelart123.de/wp-content/uploads/2022/06/Ghostface-pixel-art.png', password: '123456', password_confirmation: '123456')
Store.create!(name: 'Hopsy', picture:' https://www.nicepng.com/png/detail/808-8087148_eh-whats-up-doc-simple-pixel-art-minecraft.png', password: '123456', password_confirmation: '123456')
Store.create!(name: '1upmax', picture:' https://content.instructables.com/F8V/I30I/I6AVPSFG/F8VI30II6AVPSFG.jpg?auto=webp&fit=bounds&frame=1', password: '123456', password_confirmation: '123456')

first_store = Store.first.id
fifth_store = Store.fifth.id


# print random_store
50.times do 
  Item.create!(name: Faker::Commerce.product_name, picture:' https://www.seekpng.com/png/detail/312-3124209_pokeball-pixel-art-easy-cool-pixel-art.png', price: rand(20..100), store_id: rand(first_store..fifth_store) )
end

puts 'done'