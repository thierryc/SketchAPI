import { wrapObject } from './wrapNativeObject'

/**
 * Represents a rectangle.
 */
export class Rectangle {
  /**
   * Return a new Rectangle object for a given x,y, width and height.
   *
   * @param {number | Rectangle} x The x coordinate of the top-left corner of the rectangle. Or a Rectangle.
   * @param {number} y The y coordinate of the top-left corner of the rectangle.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   * @return The new Rectangle object.
   */
  constructor(x, y, width, height) {
    // if the argument is object
    if (x && x.x) {
      this.x = parseFloat(x.x)
      this.y = parseFloat(x.y)
      this.width = parseFloat(x.width)
      this.height = parseFloat(x.height)
    } else {
      /**
       * The x coordinate of the top-left corner of the rectangle.
       * @type {number}
       */
      this.x = parseFloat(x)

      /**
       * The y coordinate of the top-left corner of the rectangle.
       * @type {number}
       */
      this.y = parseFloat(y)

      /**
       * The width of the rectangle.
       * @type {number}
       */
      this.width = parseFloat(width)

      /**
       * The height of the rectangle.
       * @type {number}
       */
      this.height = parseFloat(height)
    }
  }

  /**
   * Adjust this rectangle by offsetting it.
   *
   * @param {number} x The x offset to apply.
   * @param {number} y The y offset to apply.
   */
  offset(x, y) {
    this.x += parseFloat(x)
    this.y += parseFloat(y)
    return this
  }

  scale(factorWidth, factorHeight) {
    this.width *= parseFloat(factorWidth)
    this.height *= parseFloat(
      typeof factorHeight === 'undefined' ? factorWidth : factorHeight
    )
    return this
  }

  /**
   * Return the Rectangle as a CGRect.
   *
   * @return {CGRect} The rectangle.
   */
  asCGRect() {
    return CGRectMake(this.x, this.y, this.width, this.height)
  }

  /**
   * Return a string description of the rectangle.
   *
   * @return {string} Description of the rectangle.
   */
  toString() {
    return `{${this.x}, ${this.y}, ${this.width}, ${this.height}}`
  }

  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
    }
  }

  /**
   * Convert a rectangle in the coordinates that a layer uses to another layer's coordinates.
   *
   * @param {Layer} layerA The layer in which the rectangle's coordinates are expressed.
   * @param {Layer} layerB The layer in which the rectangle's coordinates will be expressed.
   * @return {Rectangle} The converted rectangle expressed in the coordinate system of the layerB layer.
   */
  changeBasis({ from, to }) {
    const fromLayer = wrapObject(from)
    const toLayer = wrapObject(to)
    if (!fromLayer) {
      if (
        !toLayer ||
        !toLayer.sketchObject ||
        !toLayer.sketchObject.convertPoint_fromLayer
      ) {
        throw new Error(`Expected a Layer, got ${to}`)
      }
      const origin = toLayer.sketchObject.convertPoint_fromLayer(
        NSMakePoint(this.x, this.y),
        null
      )
      return new Rectangle(origin.x, origin.y, this.width, this.height)
    }
    if (
      !fromLayer.sketchObject ||
      !fromLayer.sketchObject.convertPoint_toLayer
    ) {
      throw new Error(`Expected a Layer, got ${from}`)
    }
    const origin = fromLayer.sketchObject.convertPoint_toLayer(
      NSMakePoint(this.x, this.y),
      toLayer ? toLayer.sketchObject : null
    )
    return new Rectangle(origin.x, origin.y, this.width, this.height)
  }
}
