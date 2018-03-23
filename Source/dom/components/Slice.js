import { DefinedPropertiesKey } from '../WrappedObject'
import { Layer } from './Layer'
import { Style } from '../Style'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { Rectangle } from '../Rectangle'
import { isNativeObject } from '../utils'

// TODO: set and modify path

/**
 * Represents a slice layer (a rectangle, oval, path, etc).
 */
export class Slice extends Layer {
  /**
   * Make a new slice object.
   *
   * @param [Object] properties - The properties to set on the object as a JSON object.
   *                              If `sketchObject` is provided, will wrap it.
   *                              Otherwise, creates a new native object.
   */
  constructor(slice = {}) {
    if (!slice.sketchObject) {
      // eslint-disable-next-line no-param-reassign
      slice.sketchObject = Factory.createNative(Slice)
        .alloc()
        .initWithFrame(new Rectangle(0, 0, 100, 100).asCGRect())

      super(slice)

      this.sketchObject.addLayer(
        MSSliceLayer.alloc().initWithFrame(this.frame.asCGRect())
      )
    } else {
      super(slice)
    }
  }
}

// MSSliceLayer

Slice.type = Types.Slice
Slice[DefinedPropertiesKey] = { ...Layer[DefinedPropertiesKey] }
Factory.registerClass(Slice, MSShapeGroup)

/*
slice.exportOptions().setLayerOptions(2)
slice.exportOptions().removeAllExportFormats();
size = slice.exportOptions().addExportFormat();
size.setName('');
size.setScale(1);
*/

Slice.define('exportOptions', {
  get() {
    return null
  },
  set() {},
})

Slice.define('style', {
  get() {
    return Style.fromNative(this._object.style())
  },
  set(style) {
    if (isNativeObject(style)) {
      this._object.style = style
    } else if (!style || !style.sketchObject) {
      this._object.style = new Style(style).sketchObject
    } else {
      this._object.style = style.sketchObject
    }
  },
})
