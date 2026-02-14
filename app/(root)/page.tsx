import { getCountryList } from '@/domains/countries';
import { CountryList, CountryPagination } from '@/modules/home';
import { searchParams } from '@/utils/helpers';

const Page = async (props: Page.Props) => {
  const params = await props.searchParams;
  const parsedSearchParams = searchParams.parse(params);

  const countries = await getCountryList(parsedSearchParams);

  const page = params.page || 1;
  const list = countries.slice((page - 1) * 8, page * 8);

  return (
    <div className="w-full flex flex-col gap-y-13 relative isolate">
      <CountryList collection={list} />
      <CountryPagination totalItems={countries.length} />
    </div>
  );
};

export default Page;
