import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
import { SearchDTOType } from './search.dto'

const SearchService = async (data: SearchDTOType) => {
  dotenv.config()

  const URL = process.env.URL
  const search = `${URL}=&checkin=${data.checkin}&checkout=${data.checkout}`

  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(search, { timeout: 30000 })
    await page.waitForNavigation({ timeout: 30000 })
    await page.screenshot({ path: './src/assets/screenshot.png' })
    const response = await page.evaluate(() => {
      const data = {
        name: document.querySelectorAll('.room-option-title--title'),
        description: document.querySelectorAll('.room-option-title--amenities'),
        price: document.querySelectorAll('strong.term__highlight'),
        image: document.querySelectorAll('.q-carousel__slide'),
      }
      return [data].map(() => ({}))
    })
    await browser.close()

    return response
  } catch (error: any) {
    console.error(error)
    throw new Error(error?.message || error)
  }
}

export default SearchService
