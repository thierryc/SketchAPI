---
title: Slice
order: 208
section: components
---

```javascript
var Slice = require('sketch/dom').Slice
```

An slice layer. It is an instance of [Layer](#layer) so all the methods defined there are available.

| Properties                                                 |                                                                                                 |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| id<span class="arg-type">string</span>                     | The unique ID of the Slice.                                                                     |
| name<span class="arg-type">string</span>                   | The name of the Slice                                                                           |
| parent<span class="arg-type">[Group](#group)</span>        | The group the Slice is in.                                                                      |
| frame<span class="arg-type">[Rectangle](#rectangle)</span> | The frame of the Slice. This is given in coordinates that are local to the parent of the layer. |
| flow<span class="arg-type">[Flow](#flow)</span>            | The prototyping action associated with the Slice.                                               |
| style<span class="arg-type">[Style](#style)</span>         | The style of the Slice.                                                                         |

## Create a new Slice

```javascript
new Slice({
  name: 'my slice',
})
```

TODO: How to set export Settings
