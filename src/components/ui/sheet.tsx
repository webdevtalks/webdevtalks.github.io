import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Sheet({
  open,
  onOpenChange,
  title,
  description,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="sheet-overlay fixed inset-0 z-40 bg-brand/35 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            'sheet-content fixed inset-y-0 left-0 z-50 flex w-5/6 max-w-sm flex-col border-r border-black/10 bg-white p-5 shadow-2xl outline-none',
          )}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          {description ? <Dialog.Description className="sr-only">{description}</Dialog.Description> : null}
          <Dialog.Close className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition hover:bg-black/5 hover:text-brand">
            <X className="h-5 w-5" />
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
