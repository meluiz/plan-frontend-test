import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CountryCard } from '@/components/layout';
import { Button } from '@/components/ui';
import { getCountryByName, getCountryList } from '@/domains/countries';
import { CountryDetails, CountryFlag } from '@/modules/details';

export const generateStaticParams = async () => {
  const countries = await getCountryList();

  return countries.map((country) => ({
    slug: encodeURIComponent(country.name.common),
  }));
};

const Page = async (props: Page.Props) => {
  const { slug } = await props.params;

  const name = decodeURIComponent(slug);
  const country = await getCountryByName(name);

  if (!slug || !country) {
    return notFound();
  }

  return (
    <div className="w-full flex flex-col gap-y-13 relative isolate">
      <CountryCard region={country.region} subregion={country.subregion}>
        <div className="w-full min-h-content grid grid-cols-12 relative isolate gap-x-5">
          <CountryFlag country={country} />
          <div className="grid grid-cols-12 col-span-12 lg:col-span-9 gap-y-10 lg:gap-y-13.5">
            <CountryDetails country={country} />
            <div className="flex items-center justify-center col-span-12 lg:col-span-8">
              <Button.Root className="w-full lg:w-3xs" asChild>
                <Link href="/" prefetch>
                  <Button.Label>Voltar</Button.Label>
                </Link>
              </Button.Root>
            </div>
          </div>
        </div>
      </CountryCard>
    </div>
  );
};

export default Page;
