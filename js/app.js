import { transactions } from "./state.js";
import { loadTransactions } from "./storage.js";
import { addTransaction } from "./transactions.js";
import { renderApp } from "./ui.js";

const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const amount = form.querySelector('input[type="number"]').value;
  const type = form.querySelector("select").value;
  const category = form.querySelector('input[type="text"]').value;

  if (!amount || !category.trim()) return;


  addTransaction(type, amount, category);
  console.log(addTransaction)
  renderApp();
  form.reset();
});

// Init
transactions.push(...loadTransactions());
renderApp();
