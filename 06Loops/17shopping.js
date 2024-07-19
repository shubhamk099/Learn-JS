
const shoppingCart = [
  {
    itemName: "JavaScript Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 999,
  },
  {
    itemName: "Android Course",
    price: 5999,
  },
  {
    itemName: "JAVA Course",
    price: 2999,
  },
];

const delivaryCost = 99;

const priceToPay = shoppingCart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  delivaryCost
);

console.log(priceToPay);