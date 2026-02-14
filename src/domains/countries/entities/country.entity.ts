export type CountryAdapter = {
  getCountryList(): Promise<Country[]>
  getCountryByName(name: string): Promise<Country[]>
}

export type Country = {
  name: Name
  flags: Flag
  region: string
  subregion: string
  population: number
  capital: string[]
  currencies?: Record<string, Currency>
  languages: Record<string, string>
  translations: Translations
}

export type Name = {
  common: string
  official: string
}

export type NativeName = {
  common: string
  official: string
}

export type Flag = {
  png: string
  svg: string
  alt: string
}

export type Currency = {
  name: string
  symbol: string
}

export type Translations = {
  [key: string]: NativeName
}
