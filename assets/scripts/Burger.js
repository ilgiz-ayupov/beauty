class Burger {
  /**
   *
   * @param {{btn: string}} options
   */
  constructor({ btn }) {
    this.$btn = $(btn);

    this.$btn.on("click", () => this.toggle());
  }

  toggle() {
    if (this.$btn.data.active === "true") {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.$btn.data.active = "true";
    $("#header").data.showMenu = "true";
  }

  close() {
    this.$btn.data.active = "false";
    $("#header").data.showMenu = "false";
  }
}
