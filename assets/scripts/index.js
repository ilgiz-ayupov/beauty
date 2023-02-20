const burger = new Burger({
  btn: "#burger-btn",
});

$(document).on("click", (event) => {
  const $target = $(event.target);
  if (!$target.isEqual(burger.$btn) && burger.$btn.data.active === "true") {
    burger.close();
  }
});
