import z from 'zod';

export const CountryNativeNameSchema = z.object({
  common: z.string(),
  official: z.string(),
});

export const CountryNameSchema = z.object({
  common: z.string(),
  official: z.string(),
  // nativeName: CountryNativeNameSchema,
});

export const CountryFlagSchema = z.object({
  png: z.string(),
  svg: z.string(),
  alt: z.string(),
});

export const CountryTranslationsSchema = z.record(z.string(), CountryNativeNameSchema);

export const CountrySchema = z.object({
  name: CountryNameSchema,
  flags: CountryFlagSchema,
  region: z.string(),
  capital: z.array(z.string()),
  languages: z.record(z.string(), z.string()),
  translations: CountryTranslationsSchema,
});

export const CountryListSchema = z.array(CountrySchema);
