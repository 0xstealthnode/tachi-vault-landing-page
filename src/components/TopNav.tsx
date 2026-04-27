import { TachiWordmark } from './TachiMark'

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-tachi-border bg-tachi-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center" aria-label="TAURUS Vault home">
          <TachiWordmark height={26} />
        </a>
        <nav className="flex items-center gap-8 text-sm">
          <a
            href="#features"
            className="hidden text-tachi-muted transition-colors hover:text-tachi-white sm:inline"
          >
            Features
          </a>
          <a
            href="#install"
            className="hidden text-tachi-muted transition-colors hover:text-tachi-white sm:inline"
          >
            Install
          </a>
          <a
            href="#download"
            className="bg-tachi-red px-4 py-2 text-tachi-white transition-colors hover:bg-tachi-red-hover"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}
