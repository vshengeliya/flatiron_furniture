
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

 item_7 = Item.create(image_url: "./images/desk-001.jpg",
                     title: "Oak Desk",
                     description: "Classic Desk made with solid oak",
                     price: 1500,
                     category: "desks")

item_8 = Item.create(image_url: "./images/desk-002.jpg",
                     title: "Ivory Desk",
                     description: "Ivory Desk made with solid wood",
                     price: 800,
                     category: "desks")

item_9 = Item.create(image_url: "./images/desk-003.jpg",
                     title: "Light Brown Desk",
                     description: "Light Brown Desk made with solid wood",
                     price: 1350,
                     category: "desks")

item_10 = Item.create(image_url: "./images/desk-004.jpg",
                     title: "Light Brown Desk",
                     description: "Light Brown Classic Desk made with solid wood",
                     price: 1250,
                     category: "desks")

item_11 = Item.create(image_url: "./images/desk-005.jpg",
                     title: "Classic Oak Desk",
                     description: "Brown Classic Desk made with solid oak",
                     price: 1100,
                     category: "desks")

item_12 = Item.create(image_url: "./images/chair-001.jpg",
                     title: "Yellow Chair",
                     description: "Yellow Velour Chair for Living Room",
                     price: 600,
                     category: "chairs")

item_13 = Item.create(image_url: "./images/chair-002.jpg",
                     title: "Black Chair with Ottoman",
                     description: "Black Office Chair with Ottoman",
                     price: 1200,
                     category: "chairs")

item_14 = Item.create(image_url: "./images/chair-003.jpg",
                     title: "Green Chair",
                     description: "Green Velour Chair for Living Room",
                     price: 800,
                     category: "chairs")

item_15 = Item.create(image_url: "./images/chair-004.jpg",
                     title: "Outdoor Chair",
                     description: "Wooden Frame Outdoor Ivory Color Chair ",
                     price: 700,
                     category: "chairs")

item_16 = Item.create(image_url: "./images/chair-005.jpg",
                     title: "Dining Chair",
                     description: "Dining Chair various colors",
                     price: 450,
                     category: "chairs")

item_17 = Item.create(image_url: "./images/bookshelf-001.jpg",
                     title: "Light Brown Bookshelf",
                     description: "Light Brown Bookshelf for Living Rooms",
                     price: 900,
                     category: "bookshelfs")

item_18 = Item.create(image_url: "./images/bookshelf-002.jpg",
                     title: "White Bookshelf",
                     description: "White Bookshelf for Living Rooms",
                     price: 860,
                     category: "bookshelfs")

item_19 = Item.create(image_url: "./images/bookshelf-003.jpg",
                     title: "Tree-shaped Bookshelf",
                     description: "Tree-shaped Bookshelf for Living Room, Bedroom, made with real wood",
                     price: 750,
                     category: "bookshelfs")

item_20 = Item.create(image_url: "./images/bookshelf-004.jpg",
                     title: "Black Wide Bookshelf",
                     description: "Black Wide Bookshelf for Studio, Living Room",
                     price: 1200,
                     category: "bookshelfs")

item_21 = Item.create(image_url: "./images/bookshelf-005.jpg",
                     title: "White Wide Bookshelf",
                     description: "White wall-wide Bookshelf from floor to celling made with real wood",
                     price: 1800,
                     category: "bookshelfs")

item_22 = Item.create(image_url: "./images/beds-002.jpg",
                     title: "White Wooden Bed",
                     description: "White Wooden Bed, Queen Size",
                     price: 2500,
                     category: "beds")

item_23 = Item.create(image_url: "./images/beds-003.jpg",
                     title: "Light Brown Bed Frame",
                     description: "Light Brown Bed Frame, King Size",
                     price: 2100,
                     category: "beds")

item_24 = Item.create(image_url: "./images/beds-004.jpg",
                     title: "Light Brown Bed Frame",
                     description: "Light Brown Bed Frame, Queen Size",
                     price: 1900,
                     category: "beds")

item_25 = Item.create(image_url: "./images/beds-005.jpg",
                     title: "Light Brown Wooden Bed",
                     description: "Light Brown Wooden Bed, Queen Size",
                     price: 2800,
                     category: "beds")

item_26 = Item.create(image_url: "./images/coffee-001.jpg",
                     title: "Light Brown Coffee Table",
                     description: "Light Brown coffee table, real wood",
                     price: 800,
                     category: "coffee tables")

item_27 = Item.create(image_url: "./images/coffee-002.jpg",
                     title: "Marble/Wooden Coffee Table",
                     description: "Marble top and wooden bottom coffee table for living room",
                     price: 1500,
                     category: "coffee tables")

item_28 = Item.create(image_url: "./images/coffee-003.jpg",
                     title: "Wooden Coffee Table",
                     description: "Wooden coffee table for living room",
                     price: 1150,
                     category: "coffee tables")

item_29 = Item.create(image_url: "./images/coffee-004.jpg",
                     title: "Low-level Coffee Table",
                     description: "Low-level Coffee Table, real oak",
                     price: 1350,
                     category: "coffee tables")

item_30 = Item.create(image_url: "./images/coffee-005.jpg",
                     title: "Classic Coffee Table",
                     description: "Classic Dark Brown Coffee Table, real oak",
                     price: 1200,
                     category: "coffee tables")

item_31 = Item.create(image_url: "./images/lamp-001.jpg",
                     title: "Classic Lamp",
                     description: "Classic Lamp with metal frame",
                     price: 700,
                     category: "lamp")

item_32 = Item.create(image_url: "./images/lamp-002.jpg",
                     title: "Green Metal Lamp",
                     description: "Green Metal Lamp",
                     price: 900,
                     category: "lamp")

item_33 = Item.create(image_url: "./images/lamp-003.jpg",
                     title: "Hi-Tech Tall Lamp",
                     description: "Hi-Tech Tall Lamp",
                     price: 750,
                     category: "lamp")

item_34 = Item.create(image_url: "./images/lamp-004.jpg",
                     title: "Small Desk Lamp",
                     description: "Small Deak Lamp, golden color, metal",
                     price: 450,
                     category: "lamp")

item_35 = Item.create(image_url: "./images/lamp-005.jpg",
                     title: "Low Lamp",
                     description: "Low Lamp, various colors, models",
                     price: 560,
                     category: "lamp")

                    
                    

                     


cart_1 = Cart.create(user_id: User.first.id, item_id: Item.first.id)
cart_2 = Cart.create(user_id: User.first.id, item_id: Item.second.id)
cart_3 = Cart.create(user_id: User.first.id, item_id: Item.third.id)

cart_1 = Cart.create(user_id: User.second.id, item_id: Item.first.id)
# cart_2 = Cart.create(user_id: User.second.id, item_id: Item.second.id)
# cart_3 = Cart.create(user_id: User.second.id, item_id: Item.third.id)

