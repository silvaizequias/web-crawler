import { Router } from 'express'
import { SearchDTO, SearchDTOType } from './search/search.dto'
import SearchService from './search/search.service'

const router = Router()

const mainRoute = router.get('/', (request, response) => {
  try {
    response.status(200).send('Web Crawler Challenge Application')
  } catch (error: any) {
    console.error(error)
    response.status(400).send(error?.message || error)
  }
})

const searchRoute = router.post('/search', async (request, response) => {
  const inputs: SearchDTOType = await request.body
  try {
    if (await SearchDTO.parseAsync(inputs))
      response.status(200).json(await SearchService(inputs))
  } catch (error: any) {
    console.error(error)
    response.status(400).send(error?.message || error)
  }
})

export const routes: Router[] = [mainRoute, searchRoute]
