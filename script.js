const ul = document.querySelector(".accordian");

function accordian(evt) {
  evt.preventDefault();
  let btn = evt.target.closest("button");
  if (!btn) return;
  if (!ul.contains(btn)) return;

  let panel = btn.nextElementSibling;
  let panelArrIcon = btn.querySelector("img");
  btn.classList.toggle("open");
  panel.classList.toggle("open");

  if (btn.classList.contains("open") && panel.classList.contains("open")) {
    panelArrIcon.style.transform = "rotate(180deg)";
  } else {
    panelArrIcon.style.transform = "rotate(0deg)";
  }
}

ul.addEventListener("click", accordian, false);
