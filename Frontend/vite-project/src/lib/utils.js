export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatCurrency(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}