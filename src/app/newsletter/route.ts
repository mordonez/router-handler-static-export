import { NextResponse } from "next/server"

export async function GET(
  request: Request
) {
const html = `
    <html>
    <head>
      <title>Newsletter</title>
    </head>
    <body><h1>Newsletter</h1></body>
    </html>`
  return new NextResponse(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  })
}
