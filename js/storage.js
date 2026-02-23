import { transactions } from "./state.js";

const STORAGE_KEY = "expense_tracker_transactions";
console.log(transactions)
export function saveTransactions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
}

export function loadTransactions() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}
