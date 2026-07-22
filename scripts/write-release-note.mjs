import fs from 'node:fs'
import path from 'node:path'

const payload = JSON.parse(process.env.PAYLOAD ?? '{}')
for (const key of ['version', 'date', 'whatsNew', 'fullNotes']) {
  if (!payload[key]) {
    console.error(`Missing payload.${key}`)
    process.exit(1)
  }
}

const output = {
  version: String(payload.version),
  date: String(payload.date),
  whatsNew: String(payload.whatsNew),
  fullNotes: String(payload.fullNotes),
  updatedAt: new Date().toISOString(),
}
const outFile = path.resolve('src/data/latest-release.json')
fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, `${JSON.stringify(output, null, 2)}\n`)
console.log(`Wrote ${outFile}`)
