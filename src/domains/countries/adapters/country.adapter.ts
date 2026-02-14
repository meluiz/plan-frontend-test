import type { Country, CountryAdapter } from '../entities';
import { CountryListSchema } from '../schemas';

export const createCountryAdapter = (): CountryAdapter => {
  const getCountryList = async () => {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,languages,population,region,subregion,translations',
      { method: 'GET', cache: 'force-cache' },
    );

    const payload = await response.json();
    return CountryListSchema.parse(payload) as Country[];
  };

  const getCountryByName = async (name: string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`, {
      method: 'GET',
      cache: 'force-cache',
    });

    const payload = await response.json();
    return CountryListSchema.parse(payload) as Country[];
  };

  return {
    getCountryList,
    getCountryByName,
  };
};
