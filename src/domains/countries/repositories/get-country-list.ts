import type { SearchParams } from '@/utils/helpers';

import { createCountryAdapter } from '../adapters';

export const getCountryList = async (params: SearchParams = {}) => {
  const { search, lang, regions } = params;

  const { getCountryList } = createCountryAdapter();

  const list = await getCountryList();

  let next = Array.from(list);

  if (search) {
    next = next.filter((item) => {
      const isCommonName = item.name.common.toLowerCase().includes(search.toLowerCase());
      const isOfficialName = item.name.official.toLowerCase().includes(search.toLowerCase());
      const isCapitalName = item.capital.some((capital) =>
        capital.toLowerCase().includes(search.toLowerCase()),
      );

      return isCommonName || isOfficialName || isCapitalName;
    });
  }

  if (lang && lang !== 'all') {
    next = next.filter((item) =>
      Object.values(item.languages).some(
        (language) => language.toLowerCase() === lang.toLowerCase(),
      ),
    );
  }

  if (regions) {
    next = next.filter((item) =>
      regions.map((region) => region.toLowerCase()).includes(item.region.toLowerCase()),
    );
  }
  console.log('after:search', next.length);

  return next;
};
