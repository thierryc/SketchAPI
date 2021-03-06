import { danger, warn } from 'danger'

const LIB_REGEX = /^Source\/.*\.js$/
const TEST_REGEX = /^Source\/.*\/__tests__\/.*\.test\.js?$/
const DOCS_REGEX = /^docs\/api\/.*\.md$/

/**
 * CHECK FOR CHANGELOG UPDATE
 */

const hasCHANGELOGChanges = danger.git.modified_files.some(
  path => path === 'CHANGELOG.json'
)
const hasLibraryChanges = danger.git.modified_files.some(path =>
  LIB_REGEX.test(path)
)

if (hasLibraryChanges && !hasCHANGELOGChanges) {
  warn('This pull request may need a CHANGELOG entry.')
}

/**
 * CHECK FOR PACKAGE.JSON UPDATE
 */
const packageChanged = danger.git.modified_files.some(
  path => path === 'package.json'
)
const lockfileChanged = danger.git.modified_files.some(
  path => path === 'package-lock.json'
)

if (packageChanged && !lockfileChanged) {
  const message =
    'Changes were made to package.json, but not to package-lock.json'
  const idea = 'Perhaps you need to run `npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

const corePackageChanged = danger.git.modified_files.some(
  path => path === 'core-modules/package.json'
)
const coreLockfileChanged = danger.git.modified_files.some(
  path => path === 'core-modules/package-lock.json'
)

if (corePackageChanged && !coreLockfileChanged) {
  const message =
    'Changes were made to core-modules/package.json, but not to core-modules/package-lock.json'
  const idea = 'Perhaps you need to run `cd core-modules && npm run install`?'
  warn(`${message} - <i>${idea}</i>`)
}

/**
 * CHECK FOR TESTS
 */

const hasTestChanges = danger.git.modified_files.some(path =>
  TEST_REGEX.test(path)
)

// Warn if there are library changes, but not tests
if (hasLibraryChanges && !hasTestChanges) {
  warn(
    "There are library changes, but not tests. That's OK as long as you're refactoring existing code"
  )
}

/**
 * CHECK FOR DOCS
 */

const hasDocsChanges = danger.git.modified_files.some(path =>
  DOCS_REGEX.test(path)
)

// Warn if there are library changes, but not docs
if (hasLibraryChanges && !hasDocsChanges) {
  warn(
    "There are library changes, but not docs. That's OK as long as you're refactoring existing code"
  )
}
