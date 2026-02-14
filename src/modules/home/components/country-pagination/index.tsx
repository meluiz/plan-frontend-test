'use client';

import { Suspense } from 'react';

import { Pagination, Tooltip, usePagination } from '@ark-ui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { PasserLeft, PasserRight } from '@/components/icons';
import { searchParams } from '@/utils/helpers';

export type CountryPaginationPureProps = {
  totalItems: number;
  searchParams: URLSearchParams;
};

export const CountryPaginationPure = (props: CountryPaginationPureProps) => {
  const { totalItems } = props;

  const passthrough = searchParams.parse(Object.fromEntries(props.searchParams));

  const pagination = usePagination({
    type: 'link',
    pageSize: 8,
    page: passthrough.page || 1,
    siblingCount: 2,
    count: totalItems,
    getPageUrl: ({ page }) => {
      const params = new URLSearchParams(props.searchParams);
      params.set('page', page.toString());
      return `/?${params.toString()}`;
    },
  });

  if (totalItems <= 8) {
    return null;
  }

  return (
    <Pagination.RootProvider className="flex items-center justify-center" value={pagination}>
      <div className="flex items-center gap-x-5">
        <Link
          className="*:[svg]:size-13 cursor-pointer text-white disabled:pointer-events-none disabled:opacity-50"
          href="/"
          {...pagination.getPrevTriggerProps()}
          prefetch
        >
          <PasserLeft />
        </Link>

        <div className="hidden items-center gap-x-2.5 sm:flex">
          {pagination.pages.map((page, index) => {
            if (page.type === 'ellipsis') {
              return (
                <span
                  key={`ellipsis:${index + 1}`}
                  className="text-white/50 font-bold italic text-xl pointer-events-none"
                >
                  &#8230;
                </span>
              );
            }

            return (
              <Tooltip.Root key={`page:${page.value}`} positioning={{ placement: 'top' }}>
                <Tooltip.Trigger className="size-4 flex rounded-full">
                  <Link
                    className="size-full flex border-3 border-white cursor-pointer rounded-full data-selected:bg-white"
                    href="/"
                    prefetch
                    {...pagination.getItemProps(page)}
                  >
                    <span className="sr-only">{page.value}</span>
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Positioner>
                  <Tooltip.Content className="px-2 py-0.5 bg-white rounded-lg text-black font-semibold text-xs">
                    {page.value}
                  </Tooltip.Content>
                </Tooltip.Positioner>
              </Tooltip.Root>
            );
          })}
        </div>
        <Link
          className="*:[svg]:size-13 cursor-pointer text-white disabled:pointer-events-none disabled:opacity-50"
          href={{ pathname: '/' }}
          {...pagination.getNextTriggerProps()}
          prefetch
        >
          <PasserRight />
        </Link>
      </div>
    </Pagination.RootProvider>
  );
};

export type CountryPaginationProps = {
  totalItems: number;
};

export const CountryPagination = (props: CountryPaginationProps) => {
  const searchParams = useSearchParams();

  return (
    <Suspense fallback={null}>
      <CountryPaginationPure searchParams={searchParams} {...props} />
    </Suspense>
  );
};
