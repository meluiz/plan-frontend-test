import { createCountryAdapter } from '../adapters'

export const getCountryByName = async (name: string) => {
  const { getCountryByName } = createCountryAdapter()
  const result = await getCountryByName(name)

  return result?.at(0)
}
