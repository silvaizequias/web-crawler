import express from 'express'
import dotenv from 'dotenv'

export function app(): express.Express {
  const server = express()
  server.use(express.json())

  return server
}

function run(): void {
  dotenv.config()

  const PORT = process.env.PORT || 8080

  const server = app()
  server.listen(PORT, () => {
    console.log(
      `⚡️[server]: Price Quotation listening on http://localhost:${PORT}`,
    )
  })
}

run()
