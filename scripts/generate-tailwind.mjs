import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { compile } from 'tailwindcss'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const src = path.join(root, 'src')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...await walk(full))
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(full)
  }
  return files
}

const files = await walk(src)
let source = ''
for (const file of files) source += `\n${await fs.readFile(file, 'utf8')}`

const candidates = new Set()
for (const token of source.match(/[A-Za-z0-9_:@./\[\](),.%#-]+/g) || []) {
  if (token.length > 0 && token.length < 300) candidates.add(token)
}

const tailwindPackage = await fs.readFile(path.join(root, 'node_modules/tailwindcss/index.css'), 'utf8')
const compiler = await compile(tailwindPackage)
const css = compiler.build([...candidates])
await fs.writeFile(path.join(src, 'styles/tailwind.generated.css'), css)
console.log(`Generated Tailwind CSS for ${candidates.size} candidates.`)
