export type CountryAdapter = {
  getCountryList(): Promise<Country[]>;
};

export type Country = {
  name: Name;
  flags: Flag;
  region: string;
  capital: string[];
  languages: string[];
  translations: Translations;
};

export type Name = {
  common: string;
  official: string;
};

export type NativeName = {
  common: string;
  official: string;
};

export type Flag = {
  png: string;
  svg: string;
  alt: string;
};

export type Translations = {
  [key: string]: NativeName;
};
