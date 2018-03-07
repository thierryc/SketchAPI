---
title: DocumentSaved
trigger: A Document is saved
documented: true
---

The `DocumentSaved` action is triggered when a Document is saved (either by user interaction, or via the AutoSave mechanism in macOS).

## Action Context

The action context for this action contains three keys:

- `size`: the filesize of the Document, in bytes.
- `autosaved`: `0` if the Document was saved manually, `1` if it was autosaved.
- `document`: a reference to the Document being saved.

## Examples

No examples yet.
