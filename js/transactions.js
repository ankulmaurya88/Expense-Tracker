import { transactions } from "./state.js";
import { saveTransactions } from "./storage.js";

export function addTransaction(type, amount, category) {
  transactions.push({
    id: Date.now(),
    type,
    amount: Number(amount),
    category,
    createdAt: new Date().toISOString()
  });

  saveTransactions();
}

export function deleteTransaction(id) {
  const index = transactions.findIndex(t => t.id === id);
  if (index !== -1) {
    transactions.splice(index, 1);
    saveTransactions();
  }
}
