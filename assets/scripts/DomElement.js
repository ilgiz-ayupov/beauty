class DomElement {
  /**
   *
   * @param {string | Node} el
   */
  constructor(el) {
    this.$el = typeof el === "string" ? document.querySelector(el) : el;
  }

  /**
   * Вещает событие на элемент
   * @param {string} eventType
   * @param {Function} cb
   */
  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  /**
   *
   * @param {DomElement} other
   * @returns {boolean}
   */
  isEqual(other) {
    return this.$el === other.$el;
  }

  /**
   *
   * @returns {object}
   */
  get data() {
    return this.$el.dataset;
  }
}

/**
 *
 * @param {string | Node} el
 */
function $(el) {
  return new DomElement(el);
}
