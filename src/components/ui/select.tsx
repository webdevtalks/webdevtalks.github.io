import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Select({
  value,
  onValueChange,
  placeholder,
  children,
}: {
  value: string
  onValueChange: (value: string) => void
  placeholder: string
  children: React.ReactNode
}) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          'inline-flex h-11 min-w-32 items-center justify-between gap-3 rounded-full border border-black/10 bg-white/80 px-4 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus-visible:ring-4 focus-visible:ring-blue-200',
        )}
        aria-label={placeholder}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          className="z-50 min-w-32 overflow-hidden rounded-3xl border border-black/10 bg-white p-2 shadow-2xl"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

export function SelectItem({
  value,
  children,
}: {
  value: string
  children: React.ReactNode
}) {
  return (
    <SelectPrimitive.Item
      value={value}
      className="relative flex cursor-default select-none items-center rounded-2xl py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition hover:bg-slate-100 focus:bg-slate-100"
    >
      <span className="absolute left-3 inline-flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="h-4 w-4 text-slate-900" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}
