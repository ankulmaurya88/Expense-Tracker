import { calculateTotals } from "./calculations.js";
import { transactions } from "./state.js";
import { deleteTransaction } from "./transactions.js";

const balanceEl = document.querySelector("h2");
const incomeEl = document.querySelector(".bg-green-100 p:nth-child(2)");
const expenseEl = document.querySelector(".bg-red-100 p:nth-child(2)");
const listEl = document.querySelector("ul");

export function renderApp() {
  renderSummary();
  renderTransactions();
}

function renderSummary() {
  const { income, expense, balance } = calculateTotals();

  balanceEl.textContent = `₹${balance}`;
  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${expense}`;
}

function renderTransactions() {
  listEl.innerHTML = "";

  transactions.forEach(t => {
    const li = document.createElement("li");
    li.className = "flex justify-between p-2 bg-gray-50 rounded";

    li.innerHTML = `
      <span>${t.category}</span>
      <span class="${t.type === "income" ? "text-green-600" : "text-red-600"}">
        ${t.type === "income" ? "+" : "-"}₹${t.amount}
      </span>
    `;

    li.addEventListener("click", () => {
      deleteTransaction(t.id);
      renderApp();
    });

    listEl.appendChild(li);
  });
}
