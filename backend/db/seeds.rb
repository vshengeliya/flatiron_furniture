
User.destroy_all
Item.destroy_all
Cart.destroy_all

user_1 = User.create(username: "bgarlock",
                     password: "password",
                     first_name: "Ben",
                     last_name: "Garlock",
                     address: "461 Lake Ave",
                     city: "Lyndhurst",
                     state: "NJ")

user_2 = User.create(username: "vshengeliya",
                     password: "password",
                     first_name: "Veronika",
                     last_name: "Dodda",
                     address: "508 2nd St.",
                     city: "Union City",
                     state: "NJ")

item_1 = Item.create(image_url: "./images/sofa-001.jpg",
                     title: "Blue Sofa",
                     description: "It's a blue sofa",
                     price: 3000,
                     category: "sofas")

item_2 = Item.create(image_url: "./images/sofa-001.jpg",
                     title: "Blue Sofa 2",
                     description: "It's a blue sofa 2",
                     price: 2000,
                     category: "sofas")

item_3 = Item.create(image_url: "./images/sofa-001.jpg",
                     title: "Blue Sofa 3",
                     description: "It's a blue sofa 3",
                     price: 2500,
                     category: "sofas")

cart_1 = Cart.create(user_id: User.first.id, item_id: Item.first.id)
cart_2 = Cart.create(user_id: User.first.id, item_id: Item.second.id)
cart_3 = Cart.create(user_id: User.first.id, item_id: Item.third.id)

cart_1 = Cart.create(user_id: User.second.id, item_id: Item.first.id)
cart_2 = Cart.create(user_id: User.second.id, item_id: Item.second.id)
cart_3 = Cart.create(user_id: User.second.id, item_id: Item.third.id)



