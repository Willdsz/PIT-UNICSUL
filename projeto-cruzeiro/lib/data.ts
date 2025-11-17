import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Henderson de Souza',
      email: 'hendersondesouza@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Cupcake de Chocolate",
      slug: "cupcake-chocolate",
      image: "/images/cupcake-chocolate.png",
      price: 12,
      description: "Cupcake clássico de chocolate com cobertura cremosa.",
      flavor: "Chocolate",
      category: "Cupcake",
    },
    {
      name: "Cupcake de Morango",
      slug: "cupcake-morango",
      image: "/images/cupcake-morango.png",
      price: 60,
      description: "Cupcake com massa leve e cobertura de morango fresco.",
      flavor: "Morango",
      category: "Cupcake",
    },
    {
      name: "Cupcake de Red Velvet",
      slug: "cupcake-red-velvet",
      image: "/images/cupcake-red-velvet.png",
      price: 300,
      description: "Cupcake Red Velvet com cream cheese frosting.",
      flavor: "Red Velvet",
      category: "Cupcake",
    }

  ],
}
export default data
