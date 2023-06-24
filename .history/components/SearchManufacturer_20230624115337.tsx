import { Fragment } from 'react'
import { Combobox, ComboboxOption, ComboboxPopover, ComboboxInput } from '@headlessui/react'

const options = ['Option 1', 'Option 2', 'Option 3']

function Example() {
  return (
    <div>
      <Combobox>
        <ComboboxInput className="..." />
        <ComboboxPopover className="...">
          {options.map((option, optionIndex) => (
            <ComboboxOption key={optionIndex} value={option}>
              {option}
            </ComboboxOption>
          ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
