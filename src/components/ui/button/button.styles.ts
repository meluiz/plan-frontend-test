import { tv } from 'tailwind-variants';

export const root = tv({
  base: [
    'h-11 relative isolate inline-flex cursor-pointer items-center justify-center gap-x-2 whitespace-nowrap rounded-full px-[calc(--spacing(4)-1px)] py-[calc(--spacing(1.5)-1px) outline-hidden transition-all duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-stroke focus-visible:ring-offset-1 disabled:opacity-50 bg-accent hover:brightness-95',
  ],
});

export const label = tv({
  base: ['truncate font-black text-base italic text-white'],
});
