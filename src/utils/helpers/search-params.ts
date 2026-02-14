export interface SearchParams {
  page?: number | undefined;
  lang?: string | undefined;
  search?: string | undefined;
  regions?: string[] | undefined;
}

const parseAsString = (input: unknown): string | undefined => {
  return typeof input === 'string' && input.length > 0 ? input : undefined;
};

const parseAsNumber = (input: unknown): number | undefined => {
  if (typeof input === 'string') {
    const next = Number.parseInt(input);
    return Number.isNaN(next) ? undefined : next;
  }

  if (typeof input === 'number' && !Number.isNaN(input)) {
    return input;
  }
};

const parseAsArray = (input: unknown): string[] | undefined => {
  if (Array.isArray(input)) {
    return input;
  }

  if (typeof input === 'string') {
    return input.split(',').map((item) => item.trim());
  }
};

export const searchParams = {
  parse: (params: Record<string, string | string[] | undefined>): SearchParams => ({
    page: parseAsNumber(params.page),
    lang: parseAsString(params.lang),
    search: parseAsString(params.search),
    regions: parseAsArray(params.regions),
  }),
  serialize: (params: SearchParams): string => {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        searchParams.append(key, value);
      }
    }

    return searchParams.toString();
  },
};
