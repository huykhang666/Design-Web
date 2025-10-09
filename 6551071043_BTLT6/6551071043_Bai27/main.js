document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".del");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr"); 
      row.remove(); 
    });
  });
});
