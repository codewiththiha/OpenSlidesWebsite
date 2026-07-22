import fs from 'node:fs'
import path from 'node:path'

const payload = JSON.parse(process.env.PAYLOAD ?? '{}')
for (const key of ['version', 'date', 'whatsNew', 'fullNotes']) {
  if (!payload[key]) {
    console.error(`Missing payload.${key}`)
    process.exit(1)
  }
}

const release = {
  version: String(payload.version),
  date: String(payload.date),
  whatsNew: String(payload.whatsNew),
  fullNotes: String(payload.fullNotes),
  updatedAt: new Date().toISOString(),
}

const outFile = path.resolve('src/data/releases.json')
fs.mkdirSync(path.dirname(outFile), { recursive: true })
const existing = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : []
if (!Array.isArray(existing)) {
  console.error(`${outFile} must contain a JSON array`)
  process.exit(1)
}

// New releases are prepended; rerunning a release updates that version rather
// than creating a duplicate entry.
const releases = [release, ...existing.filter((entry) => entry.version !== release.version)]
fs.writeFileSync(outFile, `${JSON.stringify(releases, null, 2)}\n`)
console.log(`Wrote ${outFile} with ${releases.length} release(s)`)
