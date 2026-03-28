import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Icons from './Icons'
import logo from './assets/images/logotype.png'

const Footer = (): ReactElement => {
  return (
    <footer className="border-t border-black/8 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="inline-flex shrink-0 items-center gap-1">
          <img src={logo} alt="Logo WDT" className="h-5 w-auto object-contain" />
        </Link>
        <Icons />
      </div>
    </footer>
  )
}

export default Footer
