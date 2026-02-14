import type { SearchParams } from '@/utils/helpers'

import { createCountryAdapter } from '../adapters'
import type { Country } from '../entities'

const isAntarctica = (country: Country): boolean => {
  const antarcticaKeyword = 'antarctica'

  return (
    country.name.common.toLowerCase().includes(antarcticaKeyword) ||
    country.subregion?.toLowerCase().includes(antarcticaKeyword)
  )
}

const filterSearch = (country: Country, search: string): boolean => {
  const searchLower = search.toLowerCase()

  return (
    country.name.common.toLowerCase().includes(searchLower) ||
    country.name.official.toLowerCase().includes(searchLower) ||
    country.capital?.some((capital: string) =>
      capital.toLowerCase().includes(searchLower),
    ) ||
    country.translations.por.common.toLowerCase().includes(searchLower) ||
    country.translations.por.official.toLowerCase().includes(searchLower)
  )
}

const filterLanguage = (country: Country, lang: string): boolean => {
  const langLower = lang.toLowerCase()

  return Object.values(country.languages || {}).some(
    (language) => language.toLowerCase() === langLower,
  )
}

const filterRegion = (country: Country, regions: string[]): boolean => {
  const regionsLower = regions.map((region) => region.toLowerCase())
  return regionsLower.includes(country.region.toLowerCase())
}

export const getCountryList = async (params: SearchParams = {}) => {
  const { search, lang, regions } = params

  const { getCountryList } = createCountryAdapter()
  const list = await getCountryList()

  return list.filter((item) => {
    if (isAntarctica(item)) {
      return false
    }

    if (search && !filterSearch(item, search)) {
      return false
    }

    if (lang && lang !== 'all' && !filterLanguage(item, lang)) {
      return false
    }

    if (regions && regions.length > 0 && !filterRegion(item, regions)) {
      return false
    }

    return true
  })
}
