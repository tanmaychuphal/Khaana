const resList=[
    {
      "id": 1,
      "name": "The Spice Hub",
      "cuisine": ["Indian", "North Indian", "Tandoori"],
      "cloudinaryImageId": "itaqp0hzcrx0xnqisvzv",
      "location": {
        "address": "123 Spice Street, Downtown",
        "city": "New York",
        "zipCode": "10001"
      },
      "rating": 3.8,
      "deliveryTime": 30,
      "costForTwo": 20,
      "menu": [
        {
          "id": 101,
          "name": "Butter Chicken",
          "description": "Rich and creamy curry with tender chicken pieces",
          "price": 12,
          "isVeg": false
        },
        {
          "id": 102,
          "name": "Paneer Tikka",
          "description": "Grilled cottage cheese marinated with spices",
          "price": 8,
          "isVeg": true
        }
      ]
    },
    {
      "id": 2,
      "name": "Sushi Corner",
      "cuisine": ["Japanese", "Sushi"],
      "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
      "location": {
        "address": "456 Ocean Avenue, Seaside",
        "city": "San Francisco",
        "zipCode": "94103"
      },
      "rating": 4.7,
      "deliveryTime": 45,
      "costForTwo": 25,
      "menu": [
        {
          "id": 201,
          "name": "California Roll",
          "description": "Crab, avocado, cucumber wrapped in seaweed",
          "price": 10,
          "isVeg": false
        },
        {
          "id": 202,
          "name": "Avocado Roll",
          "description": "Fresh avocado wrapped in sushi rice",
          "price": 7,
          "isVeg": true
        }
      ]
    },
    {
      "id": 3,
      "name": "Pasta Palace",
      "cuisine": ["Italian", "Pasta"],
      "cloudinaryImageId": "hhjgw9fofqopwnioxtaj",
      "location": {
        "address": "789 Pasta Lane, Uptown",
        "city": "Chicago",
        "zipCode": "60601"
      },
      "rating": 4.2,
      "deliveryTime": 35,
      "costForTwo": 18,
      "menu": [
        {
          "id": 301,
          "name": "Spaghetti Carbonara",
          "description": "Classic Italian pasta with creamy sauce",
          "price": 15,
          "isVeg": false
        },
        {
          "id": 302,
          "name": "Margherita Pizza",
          "description": "Classic pizza with mozzarella and basil",
          "price": 12,
          "isVeg": true
        }
      ]
    },
    {
      "id": 4,
      "name": "Taco Fiesta",
      "cuisine": ["Mexican", "Tacos"],
      "cloudinaryImageId": "af8349c33cc194911e3870097f79b0d5",
      "location": {
        "address": "101 Taco Road, Midtown",
        "city": "Los Angeles",
        "zipCode": "90001"
      },
      "rating": 4.6,
      "deliveryTime": 25,
      "costForTwo": 15,
      "menu": [
        {
          "id": 401,
          "name": "Chicken Taco",
          "description": "Spicy grilled chicken with salsa",
          "price": 5,
          "isVeg": false
        },
        {
          "id": 402,
          "name": "Veggie Burrito",
          "description": "Stuffed with beans, rice, and fresh veggies",
          "price": 6,
          "isVeg": true
        }
      ]
    },
    {
      "id": 5,
      "name": "Burger Barn",
      "cuisine": ["American", "Burgers"],
      "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
      "location": {
        "address": "202 Burger Blvd, Downtown",
        "city": "Houston",
        "zipCode": "77002"
      },
      "rating": 4.3,
      "deliveryTime": 20,
      "costForTwo": 18,
      "menu": [
        {
          "id": 501,
          "name": "Classic Cheeseburger",
          "description": "Beef patty with cheddar and lettuce",
          "price": 10,
          "isVeg": false
        },
        {
          "id": 502,
          "name": "Veggie Burger",
          "description": "Grilled veggie patty with tomato and lettuce",
          "price": 9,
          "isVeg": true
        }
      ]
    },
    {
      "id": 6,
      "name": "Green Leaf",
      "cuisine": ["Healthy", "Salad"],
      "cloudinaryImageId": "dfea66ad011ca672a5c87260c97d8234",
      "location": {
        "address": "303 Greenway, Downtown",
        "city": "Seattle",
        "zipCode": "98101"
      },
      "rating": 4.8,
      "deliveryTime": 15,
      "costForTwo": 12,
      "menu": [
        {
          "id": 601,
          "name": "Caesar Salad",
          "description": "Fresh romaine with Caesar dressing and croutons",
          "price": 8,
          "isVeg": true
        },
        {
          "id": 602,
          "name": "Quinoa Bowl",
          "description": "Healthy bowl with quinoa and fresh vegetables",
          "price": 10,
          "isVeg": true
        }
      ]
    },
    {
      "id": 7,
      "name": "The Curry House",
      "cuisine": ["Indian", "South Indian"],
      "cloudinaryImageId": "ae5dee61320d76d39f90048f26018ac0",
      "location": {
        "address": "404 Spice Ave, Suburbs",
        "city": "Boston",
        "zipCode": "02108"
      },
      "rating": 4.4,
      "deliveryTime": 40,
      "costForTwo": 22,
      "menu": [
        {
          "id": 701,
          "name": "Masala Dosa",
          "description": "Crispy dosa with spicy potato filling",
          "price": 9,
          "isVeg": true
        },
        {
          "id": 702,
          "name": "Chicken Chettinad",
          "description": "Spicy chicken curry with South Indian spices",
          "price": 14,
          "isVeg": false
        }
      ]
    },
    {
      "id": 8,
      "name": "Mediterranean Delight",
      "cuisine": ["Mediterranean", "Greek"],
      "cloudinaryImageId": "fdf03b547368f189a047ce87b1fa789c",
      "location": {
        "address": "505 Olive Street, Old Town",
        "city": "Phoenix",
        "zipCode": "85001"
      },
      "rating": 4.6,
      "deliveryTime": 30,
      "costForTwo": 20,
      "menu": [
        {
          "id": 801,
          "name": "Falafel Wrap",
          "description": "Crispy falafel with fresh veggies and tahini sauce in a wrap",
          "price": 9,
          "isVeg": true
        },
        {
          "id": 802,
          "name": "Lamb Gyro",
          "description": "Seasoned lamb with tzatziki sauce in pita bread",
          "price": 12,
          "isVeg": false
        }
      ]
    }  
  ]

  export default resList;