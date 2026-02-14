'use client';

import { Field } from '@ark-ui/react';
import { usePathname, useSearchParams } from 'next/navigation';

import { Search } from '@/components/icons';
import { RegionSelector, LanguageSelector } from '@/components/layout';

import { useFilters } from './hooks';

export type FiltersProps = {
  searchParams: URLSearchParams;
};

const FiltersPure = (props: FiltersProps) => {
  const pathname = usePathname();
  const { filters, handleFilterChange } = useFilters(props);

  if (!/^\/$/.test(pathname)) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center flex-1">
      <div className="max-w-4xl w-full mx-auto relative flex flex-col gap-y-5">
        <div className="w-full grid grid-cols-8 gap-y-2 gap-x-5">
          <div className="col-span-8 md:col-span-4">
            <Field.Root>
              <Field.Label className="w-full h-13 flex items-center rounded-full border-3 border-white pr-3.5">
                <Field.Input
                  className="flex-1 h-full pl-4 focus:outline-none text-black font-semibold text-lg italic placeholder:text-black truncate"
                  placeholder="Informe o país que deseja conhecer..."
                  defaultValue={filters.search}
                  onChange={({ currentTarget }) =>
                    handleFilterChange('search', currentTarget.value)
                  }
                />
                <span className="*:[svg]:size-5 text-white">
                  <Search />
                </span>
              </Field.Label>
            </Field.Root>
          </div>
          <div className="col-span-8 md:col-span-4">
            <LanguageSelector
              defaultValue={[filters.lang ?? '']}
              onSelect={({ value }) =>
                handleFilterChange('lang', value === 'all' ? undefined : value)
              }
            />
          </div>
        </div>
        <RegionSelector
          defaultValue={filters.regions}
          onValueChange={(value) => handleFilterChange('regions', value)}
        />
      </div>
    </div>
  );
};

export const Filters = () => {
  const searchParams = useSearchParams();
  return <FiltersPure searchParams={searchParams} />;
};

export const FiltersFallback = () => {
  return <FiltersPure searchParams={new URLSearchParams()} />;
};
