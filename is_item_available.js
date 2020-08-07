function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  let quantity = 0;
  for (let i = 0; i < itemTransactions.length; i++) {
    let transaction = itemTransactions[i];
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else {
      quantity -= transaction.quantity;
    }
  }

  return (quantity > 0);
  function transactionsFor(inventoryItem, transactions) {
    return transactions.filter(inventory => inventory.id === inventoryItem);
  }
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
