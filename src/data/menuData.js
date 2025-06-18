export const menuCategories = {
  appetizers: {
    title: "Appetizers",
    items: [
      {
        id: 1,
        name: "Greek Salad",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99,
        image: "/images/greek-salad.jpg",
        dietary: ["vegetarian", "gluten-free"]
      },
      {
        id: 2,
        name: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: 5.99,
        image: "/images/bruschetta.jpg",
        dietary: ["vegan"]
      },
      {
        id: 3,
        name: "Grilled Halloumi",
        description: "Traditional Cypriot cheese grilled to perfection, served with honey drizzle and fresh herbs.",
        price: 8.99,
        image: "/images/halloumi.jpg",
        dietary: ["vegetarian", "gluten-free"]
      }
    ]
  },
  mains: {
    title: "Main Courses",
    items: [
      {
        id: 4,
        name: "Lemon Herb Grilled Fish",
        description: "Our signature dish! Fresh catch of the day grilled with lemon, herbs and served with seasonal vegetables.",
        price: 18.95,
        image: "/images/grilled-fish.jpg",
        dietary: ["gluten-free"],
        featured: true
      },
      {
        id: 5,
        name: "Pasta Primavera",
        description: "Fresh pasta tossed with seasonal vegetables in a light lemon cream sauce.",
        price: 15.99,
        image: "/images/pasta-primavera.jpg",
        dietary: ["vegetarian"]
      },
      {
        id: 6,
        name: "Mediterranean Chicken",
        description: "Herb-marinated chicken breast with sun-dried tomatoes, olives, and feta cheese.",
        price: 17.50,
        image: "/images/mediterranean-chicken.jpg",
        dietary: ["gluten-free"]
      },
      {
        id: 7,
        name: "Moussaka",
        description: "Traditional Greek casserole with layers of eggplant, potatoes, and rich meat sauce topped with béchamel.",
        price: 19.99,
        image: "/images/moussaka.jpg",
        dietary: []
      }
    ]
  },
  desserts: {
    title: "Desserts",
    items: [
      {
        id: 8,
        name: "Lemon Cake",
        description: "Our famous lemon cake with a delicate lemon glaze and fresh berries.",
        price: 6.95,
        image: "/images/lemon-cake.jpg",
        dietary: ["vegetarian"],
        featured: true
      },
      {
        id: 9,
        name: "Baklava",
        description: "Traditional Greek pastry with layers of phyllo dough, nuts, and honey syrup.",
        price: 5.95,
        image: "/images/baklava.jpg",
        dietary: ["vegetarian"]
      },
      {
        id: 10,
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
        price: 7.50,
        image: "/images/tiramisu.jpg",
        dietary: ["vegetarian"]
      }
    ]
  },
  beverages: {
    title: "Beverages",
    items: [
      {
        id: 11,
        name: "Fresh Lemonade",
        description: "House-made lemonade with fresh lemons and mint.",
        price: 3.95,
        image: "/images/lemonade.jpg",
        dietary: ["vegan", "gluten-free"]
      },
      {
        id: 12,
        name: "Greek Coffee",
        description: "Traditional Greek coffee served with a small sweet treat.",
        price: 2.95,
        image: "/images/greek-coffee.jpg",
        dietary: ["vegan", "gluten-free"]
      },
      {
        id: 13,
        name: "House Wine Selection",
        description: "Curated selection of Mediterranean wines by the glass.",
        price: 6.95,
        image: "/images/wine.jpg",
        dietary: ["vegan", "gluten-free"]
      }
    ]
  }
};

export const featuredItems = Object.values(menuCategories)
  .flatMap(category => category.items)
  .filter(item => item.featured);

export const getAllMenuItems = () => {
  return Object.values(menuCategories).flatMap(category => category.items);
};
