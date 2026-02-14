import z from 'zod'

export const CountryNativeNameSchema = z.object({
  common: z.string(),
  official: z.string(),
})

export const CountryNameSchema = z.object({
  common: z.string(),
  official: z.string(),
})

export const CountryFlagSchema = z.object({
  png: z.string(),
  svg: z.string(),
  alt: z.string(),
})

export const CountryTranslationsSchema = z.record(
  z.string(),
  CountryNativeNameSchema,
)

export const CountryCurrencySchema = z.object({
  name: z.string(),
  symbol: z.string(),
})

export const CountrySchema = z.object({
  name: CountryNameSchema,
  flags: CountryFlagSchema,
  population: z.number(),
  region: z.string().default('Desconhecido'),
  subregion: z.string().default('Desconhecido'),
  currencies: z.record(z.string(), CountryCurrencySchema).optional(),
  capital: z.array(z.string()).default(['Desconhecido']),
  languages: z.record(z.string(), z.string()),
  translations: CountryTranslationsSchema,
})

export const CountryListSchema = z.array(CountrySchema)
