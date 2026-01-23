(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // show focus ring only for keyboard nav
  let usingKeyboard = false;
  window.addEventListener("keydown", (e) => {
    if (e.key === "Tab") usingKeyboard = true;
    if (usingKeyboard) document.documentElement.classList.add("kbd");
  });
})();
