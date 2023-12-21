import express from 'express'
import dotenv from 'dotenv'
import { routes } from './src/app/app.routes'

export function app(): express.Express {
  const server = express()

  server.use(express.json())
  server.use('', routes)

  return server
}

function run(): void {
  dotenv.config()

  const PORT = process.env.PORT || 8080

  const server = app()
  server.listen(PORT, () => {
    console.log(
      `⚡️[server]: Web Crawler Challenge on http://localhost:${PORT}`,
    )
  })
}

run()
