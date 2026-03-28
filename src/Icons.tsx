import { FC, type ReactElement } from 'react'
import { Mail } from 'lucide-react'
import { Tooltip } from './components/ui/tooltip'
import { cn } from './lib/utils'
import PatreonIcon from './PatreonIcon'

interface IconsProps {
  color?: string
  className?: string
}

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.6-3h-3V9.5c0-.8.3-1.5 1.6-1.5H16V5.4c-.3 0-1.1-.1-2.1-.1-2.1 0-3.4 1.2-3.4 3.7V11H8v3h2.4v7h3.1Z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4.1" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M6.6 8.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM5 19V10h3.2v9H5Zm5.2 0V10h3.1v1.3h.1c.5-.9 1.6-1.6 3.2-1.6 3.4 0 4 2.1 4 4.9V19h-3.2v-3.9c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V19h-3.1Z" />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.9 4H21l-4.6 5.3L22 20h-4.8l-3.8-5.6L8.5 20H6.4l5-5.7L2 4h4.9l3.5 5.2L14.9 4Zm-.8 14.3h1.3L6.2 5.6H4.9l13.2 12.7Z" />
  </svg>
)

const links = [
  { href: 'https://www.facebook.com/ColimaWebDevTalks', label: 'Facebook', icon: FacebookIcon },
  { href: 'https://www.instagram.com/webdevtalksmx', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://twitter.com/webdevtalksmx', label: 'X', icon: XIcon },
  { href: 'https://www.linkedin.com/company/web-dev-talks', label: 'LinkedIn', icon: LinkedInIcon },
  { href: 'https://patreon.com/WebDevTalksColima', label: 'Patreon', icon: PatreonIcon },
  { href: 'mailto:webdevtalkscolima@gmail.com', label: 'Email', icon: Mail },
]

const Icons: FC<IconsProps> = ({ color, className }): ReactElement => {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <Tooltip key={href} content={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/72 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-zinc-200/70"
            style={color ? { color } : undefined}
          >
            <Icon className="h-5 w-5" />
          </a>
        </Tooltip>
      ))}
    </div>
  )
}

export default Icons
