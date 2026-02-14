import { Checkbox, createListCollection } from '@ark-ui/react';

import { Check } from '@/components/icons';

export type RegionSelectorProps = {
  value?: string[] | undefined;
  defaultValue?: string[] | undefined;
  onValueChange?: ((value: string[]) => void) | undefined;
};

export const RegionSelector = (props: RegionSelectorProps) => {
  const collection = createListCollection({
    items: [
      { value: 'asia', label: 'Ásia' },
      { value: 'africa', label: 'África' },
      { value: 'europe', label: 'Europa' },
      { value: 'oceania', label: 'Oceânia' },
      { value: 'americas', label: 'Américas' },
    ],
  });

  return (
    <Checkbox.Group
      className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-10"
      {...props}
    >
      {collection.items.map((item) => (
        <Checkbox.Root
          key={`region-selector:${item.value}`}
          className="flex items-center gap-x-2"
          value={item.value}
        >
          <Checkbox.Control className="size-6 flex -mt-0.5 items-center justify-center rounded-[0.625rem] border-3 border-white checked:bg-accent cursor-pointer">
            <Checkbox.Indicator className="[--total-length:19.91238021850586] [&_polyline]:[stroke-dasharray:var(--total-length)] unchecked:[&_polyline]:animate-stroke-out checked:[&_polyline]:animate-stroke-in indeterminate:[&_polyline]:animate-stroke-in [&_polyline]:transition-all [&_polyline]:duration-300 [&_polyline]:ease-out">
              <Check size={12} strokeWidth={4} />
            </Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label className="text-black text-base font-bold italic whitespace-nowrap">
            {item.label}
          </Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      ))}
    </Checkbox.Group>
  );
};
