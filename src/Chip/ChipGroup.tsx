import React from 'react'

import { Chip } from './Chip'

export interface ChipGroupOption {
  label: string

  value: string

  count?: number
}

export interface ChipGroupProps {
  options: ChipGroupOption[]

  selected: string

  onChange: (value: string) => void
}

export function ChipGroup({
  options,

  selected,

  onChange,
}: ChipGroupProps) {
  return (
    <div className="scrollbar-hide flex gap-3 overflow-x-auto whitespace-nowrap">
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          count={option.count}
          isSelected={selected === option.value}
          onSelect={() => {
            onChange(option.value)
          }}
        />
      ))}
    </div>
  )
}

export default ChipGroup
