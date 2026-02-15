import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

import { CountryCard } from '@/components/layout'
import { Button } from '@/components/ui'
import type { Country } from '@/domains/countries'

export type CountryListProps = {
  collection: Country[]
}

export const CountryList = async (props: CountryListProps) => {
  const { collection } = props

  if (collection.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-black/50">
          Nenhum país encontrado
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {collection.map((country) => {
        const key = slugify(country.name.common, {
          lower: true,
          strict: true,
        })

        return (
          <CountryCard
            key={`country:${key}`}
            region={country.region}
            subregion={country.subregion}>
            <div className="flex flex-col gap-y-5.5 flex-1 justify-between">
              <div className="flex flex-col gap-y-2.5">
                <div className="flex items-center justify-center">
                  <Image
                    src={country.flags.png}
                    className="w-5 h-4.5 object-contain object-center"
                    draggable={false}
                    width={20}
                    height={18}
                    alt={country.flags.alt}
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2 className="text-xl font-bold text-gray-dark text-center">
                    {country.translations.por.common}
                  </h2>
                  <div className="flex items-center gap-x-2.5">
                    <div className="size-5 flex items-center justify-center rounded-full bg-accent text-white">
                      <StarIcon strokeWidth={3} size={14} />
                    </div>
                    <p className="text-lg font-bold text-gray-dark">
                      {country.capital.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
              <Button.Root className="w-full" asChild>
                <Link
                  href={`/details/${encodeURIComponent(country.name.common)}`}
                  prefetch>
                  <Button.Label>Ver mais</Button.Label>
                </Link>
              </Button.Root>
            </div>
          </CountryCard>
        )
      })}
    </div>
  )
}
