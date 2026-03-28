import { type ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Icons from './Icons'
import logo from './assets/images/logotype.png'

const Footer = (): ReactElement => {
  return (
    <footer className="border-t border-black/8 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-center gap-2">
          <Link to="/" className="inline-flex flex-start gap-1">
            <span className="inline-flex h-5 w-auto overflow-hidden">
              <img src={logo} alt="Logo WDT" className="h-full w-full object-contain" />
            </span>
          </Link>
        </div>
        <Icons />
      </div>
    </footer>
  )
}

export default Footer
