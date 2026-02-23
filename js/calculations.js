import { transactions } from "./state.js";

export function calculateTotals() {
  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    t.type === "income" ? income += t.amount : expense += t.amount;
  });

  return {
    income,
    expense,
    balance: income - expense
  };
}
