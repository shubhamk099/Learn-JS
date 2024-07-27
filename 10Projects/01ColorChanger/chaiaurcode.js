

const colorButtons = document.querySelectorAll(".button"); // NodeList of <span>

const body = document.querySelector("body");

colorButtons.forEach(function (item) {
  item.addEventListener("click", function (e) {
    // e = MouseEvent
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
        body.style.backgroundColor = e.target.id;
    }
  });
});
