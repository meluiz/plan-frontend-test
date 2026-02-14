import type React from 'react';

import { Region } from '@/components/ui';

const AMERICAS_SUBREGIONS = {
  northAmerica: ['North America', 'Central America', 'Caribbean'],
  southAmerica: ['South America'],
};

const getAmericaData = (subregion?: string) => {
  if (!subregion) {
    return {
      name: 'Américas',
      icon: <Region.NorthAmerica />,
    };
  }

  if (AMERICAS_SUBREGIONS.southAmerica.includes(subregion)) {
    return {
      name: 'América do Sul',
      icon: <Region.SouthAmerica />,
    };
  }

  return {
    name: 'América do Norte',
    icon: <Region.NorthAmerica />,
  };
};

const getRegionData = (region: string, subregion?: string) => {
  switch (region.toLowerCase()) {
    case 'asia': {
      return {
        name: 'Ásia',
        icon: <Region.Asia />,
      };
    }
    case 'africa': {
      return {
        name: 'África',
        icon: <Region.Africa />,
      };
    }
    case 'europe': {
      return {
        name: 'Europa',
        icon: <Region.Europe />,
      };
    }
    case 'oceania': {
      return {
        name: 'Oceania',
        icon: <Region.Oceania />,
      };
    }
    case 'antarctic': {
      return {
        name: 'Antártica',
        icon: null,
      };
    }
    case 'americas': {
      return getAmericaData(subregion);
    }
  }
};

export type CountryCardProps = React.PropsWithChildren<{
  region: 'asia' | 'africa' | 'europe' | 'oceania' | 'americas' | 'antartctic' | (string & {});
  subregion?: string;
}>;

export const CountryCard = (props: CountryCardProps) => {
  const { region, subregion, children } = props;

  const data = getRegionData(region, subregion);

  return (
    <div className="flex-1 flex flex-col relative isolate rounded-[1.25rem] bg-white shadow-[4px_0_10px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="min-h-11 flex items-center justify-between bg-gray-header rounded-t-[1.25rem] py-1 pl-5 pr-4">
        <p className="text-base font-black italic text-white">{data?.name}</p>
        {data?.icon && (
          <div className="ml-auto relative shrink-0 grow-0 *:[svg]:h-9">{data.icon}</div>
        )}
      </div>
      <div className="w-full relative min-h-min text-black rounded-b-[1.25rem] flex flex-1 overflow-hidden">
        <div className="w-full flex relative isolate px-5 py-5.5 bg-white flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};
