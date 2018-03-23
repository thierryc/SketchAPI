import { exportObject } from './export'

import { Rectangle } from './Rectangle'
import { Style } from './Style'

import { Document } from './components/Document'
import { Group } from './components/Group'
import { Text } from './components/Text'
import { Image } from './components/Image'
import { Shape } from './components/Shape'
import { Slice } from './components/Slice'
import { Artboard } from './components/Artboard'
import { Page } from './components/Page'
import { SymbolMaster } from './components/SymbolMaster'
import { SymbolInstance } from './components/SymbolInstance'
import { HotSpot } from './components/HotSpot'

import { AnimationType, BackTarget } from './components/Flow'
import { Types } from './enums'
import { wrapObject } from './wrapNativeObject'

const api = {}

api.Document = Document
api.Group = Group
api.Text = Text
api.Image = Image
api.Shape = Shape
api.Slice = Slice
api.Artboard = Artboard
api.Page = Page
api.SymbolMaster = SymbolMaster
api.SymbolInstance = SymbolInstance
api.HotSpot = HotSpot
api.Flow = {
  AnimationType,
  BackTarget,
}

api.export = exportObject

api.Style = Style
api.Rectangle = Rectangle
api.Types = Types
api.fromNative = wrapObject

api.getDocuments = Document.getDocuments
api.getSelectedDocument = Document.getSelectedDocument

api.version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}

module.exports = api
