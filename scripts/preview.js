import express from 'express'
import { join } from 'path'
import { cwd } from 'process'

const app = express()

const prefix = '/kui-dashboard'

const port = 3000

app.use(express.static(join(cwd(), 'dist')))

express().use(prefix, app).listen(port)

console.log(`http://localhost:${port}${app.mountpath}`)
