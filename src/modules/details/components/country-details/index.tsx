import { sentence, toCapitalCase } from 'melper/string';

import type { Country } from '@/domains/countries';

const NUMBER_FORMATTER = new Intl.NumberFormat('pt-BR');

const formatCurrencies = (country: Country): string => {
  if (!country.currencies) {
    return 'Sem moeda';
  }

  const currencies = Object.values(country.currencies).map((currency) =>
    toCapitalCase(currency.name),
  );

  return sentence(currencies, { lastSeparator: ' e ' });
};

const formatLanguages = (country: Country): string => {
  const languages = Object.values(country.languages);
  return sentence(languages, { lastSeparator: ' e ' });
};

const getCountryInfo = (country: Country) => {
  return [
    {
      id: 'name',
      label: 'Nome oficial:',
      value: country.translations.por.official,
    },
    {
      id: 'capital',
      label: 'Capital:',
      value: sentence(country.capital, { lastSeparator: ' e ' }),
    },
    {
      id: 'population',
      label: 'População:',
      value: NUMBER_FORMATTER.format(country.population),
    },
    {
      id: 'currency',
      label: 'Moeda:',
      value: formatCurrencies(country),
    },
    {
      id: 'languages',
      label: 'Idiomas:',
      value: formatLanguages(country),
    },
    {
      id: 'region',
      label: 'Região:',
      value: country.region,
    },
    {
      id: 'subregion',
      label: 'Sub-Região:',
      value: country?.subregion,
    },
  ];
};

export type CountryDetailsProps = {
  country: Country;
};

export const CountryDetails = async (props: CountryDetailsProps) => {
  const { country } = props;

  const countryInfo = getCountryInfo(country);

  return (
    <div className="grid grid-cols-12 col-span-12 lg:gap-y-4">
      <h1 className="col-span-12 lg:col-span-8 text-center text-3xl lg:text-5xl text-gray-dark font-bold py-6">
        {country.translations.por.common}
      </h1>

      <div className="w-full flex flex-col gap-y-2 col-span-12 relative isolate">
        {countryInfo.map((item) => (
          <div key={item.id} className="grid grid-cols-12 items-baseline gap-x-4 lg:gap-x-5">
            <div className="col-span-5 md:col-span-6 lg:col-span-4 text-base lg:text-2xl text-gray-light font-normal text-nowrap text-left md:text-right">
              {item.label}
            </div>
            <div className="col-span-7 md:col-span-6 lg:col-span-8 text-base lg:text-2xl text-gray-light font-bold">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
