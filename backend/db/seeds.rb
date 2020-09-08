
User.destroy_all
Item.destroy_all
Cart.destroy_all

user_1 = User.create(username: "bgarlock",
                     password: "password",
                     first_name: "Ben",
                     last_name: "Garlock",
                     address: "461 Lake Ave",
                     city: "Lyndhurst",
                     state: "NJ",
                     zip_code: "07071")

user_2 = User.create(username: "vshengeliya",
                     password: "password",
                     first_name: "Veronika",
                     last_name: "Dodda",
                     address: "508 2nd St.",
                     city: "Union City",
                     state: "NJ",
                     zip_code: "07087")



item_1 = Item.create(image_url: "./images/sofa-001.jpg",
                     title: "Contemporary Blue Sofa",
                     description: "It's a blue sofa",
                     price: 3000,
                     category: "sofas")

item_2 = Item.create(image_url: "./images/sofa-002.jpg",
                     title: "Grey Sofa",
                     description: "It's a grey sofa",
                     price: 2000,
                     category: "sofas")

item_3 = Item.create(image_url: "./images/sofa-003.jpg",
                     title: "Classic Grey Sofa",
                     description: "Classic Grey Sofa",
                     price: 2500,
                     category: "sofas")

item_4 = Item.create(image_url: "./images/table-001.jpg",
                     title: "Oak Table",
                     description: "Classic Dining Room Table made with solid oak",
                     price: 1200,
                     category: "tables")

item_5 = Item.create(image_url: "./images/table-002.jpg",
                     title: "Pine Table",
                     description: "Contemporary table featuring pine finish and molded dovetail design",
                     price: 2500,
                     category: "tables")


item_6 = Item.create(image_url: "./images/table-003.jpg",
                     title: "Kendall custom dining table",
                     description: "The kendall custom dining tables are designed to fit. proportioned for the modern home, the kendall tables adapt to any space",
                     price: 1444.15,
                     category: "tables")






cart_1 = Cart.create(user_id: User.first.id, item_id: Item.first.id)
cart_2 = Cart.create(user_id: User.first.id, item_id: Item.second.id)
cart_3 = Cart.create(user_id: User.first.id, item_id: Item.third.id)

cart_1 = Cart.create(user_id: User.second.id, item_id: Item.first.id)
# cart_2 = Cart.create(user_id: User.second.id, item_id: Item.second.id)
# cart_3 = Cart.create(user_id: User.second.id, item_id: Item.third.id)

