function newDate() {
  const today = new Date();
  const tomorrow = new Date(today);

  tomorrow.setDate(today.getDate() + 1);

  const day = String(tomorrow.getDate()).padStart(2, "0");
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const year = tomorrow.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  document.querySelectorAll("#new-date").forEach((el) => {
    el.textContent = formattedDate;
  });
}
document.addEventListener("DOMContentLoaded", newDate);

function prevDate() {
  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(today.getDate());

  const day = String(yesterday.getDate()).padStart(2, "0");
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const year = yesterday.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  document.querySelectorAll("#prev-date").forEach((el) => {
    el.textContent = formattedDate;
  });
}
document.addEventListener("DOMContentLoaded", prevDate);
