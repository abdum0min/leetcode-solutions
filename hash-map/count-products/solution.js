const orders = [
  { id: 1, product: "iPhone", quantity: 1 },
  { id: 2, product: "MacBook", quantity: 1 },
  { id: 3, product: "iPhone", quantity: 2 },
  { id: 4, product: "AirPods", quantity: 1 },
  { id: 5, product: "MacBook", quantity: 1 },
];

function countProducts(ordersList) {
  const result = {};

  for (let i = 0; ordersList.length > i; i++) {
    let cur = ordersList[i];
    if (cur.product in result) {
      result[cur.product] += cur.quantity;
    } else {
      result[cur.product] = cur.quantity;
    }
  }

  return result;
}

console.log(countProducts(orders));

// Kutilayotgan natija:
// { "iPhone": 3, "MacBook": 2, "AirPods": 1 }
