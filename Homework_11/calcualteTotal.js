function calculateTotal(cart) {
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].inStock) {
      total += cart[i].price;
    }
  }

  return total;
}

const cart = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Headphones", price: 150, inStock: true },
];

console.log(calculateTotal(cart));
