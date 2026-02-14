import type React from 'react';

import { Region } from '@/components/ui';

const REGIONS = {
  asia: {
    name: 'Ásia',
    icon: <Region.Asia />,
  },
  africa: {
    name: 'África',
    icon: <Region.Asia />,
  },
  europe: {
    name: 'Europa',
    icon: <Region.Asia />,
  },
  oceania: {
    name: 'Oceânia',
    icon: <Region.Asia />,
  },
  americas: {
    name: 'Américas',
    icon: <Region.Asia />,
  },
  antarctic: {
    name: 'Antártica',
    icon: <Region.Asia />,
  },
} as const;

export type CountryCardProps = React.PropsWithChildren<{
  region: 'asia' | 'africa' | 'europe' | 'oceania' | 'americas' | 'antartctic' | (string & {});
}>;

export const CountryCard = (props: CountryCardProps) => {
  const { region, children } = props;

  const data = REGIONS[region as keyof typeof REGIONS] || {};

  return (
    <div className="flex-1 flex flex-col relative isolate rounded-[1.25rem] bg-white shadow-[4px_0_10px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="flex items-center justify-between bg-gray-header rounded-t-[1.25rem] py-1 pl-5 pr-4">
        <p className="text-base font-black italic text-white">{data?.name}</p>
        <div className="ml-auto relative shrink-0 grow-0 *:[svg]:h-9">{data?.icon}</div>
      </div>
      <div className="w-full relative min-h-min text-black rounded-b-[1.25rem] overflow-hidden">
        <div className="w-full relative isolate px-5 py-5.5 bg-white">{children}</div>
      </div>
    </div>
  );
};
