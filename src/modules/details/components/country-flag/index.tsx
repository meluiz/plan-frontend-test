import Image from 'next/image'

import type { Country } from '@/domains/countries'

export type CountryFlagProps = {
  country: Country
}

export const CountryFlag = async (props: CountryFlagProps) => {
  const { country } = props

  return (
    <div className="flex flex-col items-center gap-y-2.5 col-span-12 lg:col-span-3">
      <div className="w-full max-w-2xs flex items-center justify-center">
        <Image
          src={country.flags.svg}
          className="w-full aspect-4/3 object-contain object-center"
          draggable={false}
          width={20}
          height={18}
          alt={country.flags.alt}
        />
      </div>
      <p className="hidden lg:inline-block text-lg text-gray-dark font-bold">
        Bandeira
      </p>
    </div>
  )
}
