import { createListCollection, Select } from '@ark-ui/react'
import { ChevronDown } from 'lucide-react'

export type LanguageSelectorProps = {
  value?: string[] | undefined
  defaultValue?: string[] | undefined
  onSelect?: ((details: SelectionDetails) => void) | undefined
}

interface SelectionDetails {
  value: string
}

export const LanguageSelector = (props: LanguageSelectorProps) => {
  const collection = createListCollection({
    items: [
      { id: '0', value: 'all', label: 'Todos' },
      { id: '1', value: 'english', label: 'English' },
      { id: '2', value: 'spanish', label: 'Spanish' },
      { id: '3', value: 'french', label: 'French' },
      { id: '4', value: 'german', label: 'German' },
      { id: '5', value: 'italian', label: 'Italian' },
      { id: '6', value: 'portuguese', label: 'Portuguese' },
      { id: '7', value: 'russian', label: 'Russian' },
      { id: '8', value: 'chinese', label: 'Chinese' },
      { id: '9', value: 'japanese', label: 'Japanese' },
      { id: '10', value: 'korean', label: 'Korean' },
    ],
  })

  return (
    <Select.Root className="relative z-100" collection={collection} {...props}>
      <Select.Control className="w-full h-13 flex items-center rounded-full border-3 border-white">
        <Select.Trigger className="flex-1 h-full flex items-center justify-start pl-4 pr-3.5 focus:outline-none text-black font-semibold text-lg italic placeholder:text-black">
          <Select.ValueText placeholder="Selecione o idioma" />
        </Select.Trigger>
        <Select.Indicator className="ease-in-out-cubic duration-200 open:rotate-180 absolute right-3.5 text-white">
          <ChevronDown strokeWidth={3} />
        </Select.Indicator>
      </Select.Control>
      <Select.Positioner className="z-20">
        <Select.Content className="w-(--reference-width) border-3 border-white rounded-3xl bg-accent origin-(--transform-origin) px-5.5 py-3 open:animate-in open:fade-in-0 open:zoom-in-90 closed:animate-out closed:fade-out-0 closed:zoom-out-90 duration-150 ease-in-out-cubic focus:outline-none">
          <Select.ItemGroup className="flex flex-col gap-y-1.5">
            <Select.ItemGroupLabel className="text-black font-semibold text-lg italic">
              Selecione o idioma
            </Select.ItemGroupLabel>
            <ul className="list-disc pl-4">
              {collection.items.map((item) => (
                <li
                  key={`language-selector:${item.id}`}
                  className="text-white text-lg font-semibold italic"
                >
                  <Select.Item item={item} className="cursor-pointer">
                    <Select.ItemText>{item.label}</Select.ItemText>
                  </Select.Item>
                </li>
              ))}
            </ul>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
      <Select.HiddenSelect />
    </Select.Root>
  )
}
