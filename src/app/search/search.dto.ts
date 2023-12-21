import * as z from 'zod'

export const SearchDTO = z.object({
  checkin: z.coerce.date(),
  checkout: z.coerce.date(),
})
export type SearchDTOType = z.infer<typeof SearchDTO>
