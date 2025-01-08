function calculateCartsAmount(shoppingСarts) {
    let sum = 0;
    shoppingСarts.forEach(i => {
      sum += i;
    });
    return sum;
  }
  
  let shoppingСarts = [10000, 20000, 30000];
  console.log(calculateCartsAmount(shoppingСarts));