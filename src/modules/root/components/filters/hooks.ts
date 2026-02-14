import { useOptimistic, useTransition } from 'react';

import { useRouter } from 'next/navigation';

import { type SearchParams, searchParams } from '@/utils/helpers';

export type FiltersProps = {
  searchParams: URLSearchParams;
};

export const useFilters = (props: FiltersProps) => {
  const passthrough = searchParams.parse(Object.fromEntries(props.searchParams));

  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [filters, setFilters] = useOptimistic<SearchParams>(passthrough);

  const update = (params: SearchParams) => {
    const queryString = searchParams.serialize(params);
    router.push(`/?${queryString ?? ''}`, { scroll: false });
  };

  const handleFilterChange = (
    key: keyof SearchParams,
    value: string | string[] | undefined,
  ) => {
    startTransition(() => {
      const next = { ...filters, page: 1, [key]: value };

      update(next);
      setFilters(next);
    });
  };

  return {
    filters,
    isPending,
    handleFilterChange,
  };
};
