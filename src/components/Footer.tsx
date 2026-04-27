import { TachiMark } from './TachiMark'

export function Footer() {
  return (
    <footer className="border-t border-tachi-border bg-tachi-black">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div className="flex items-center gap-3">
          <TachiMark size={24} />
          <span className="text-sm text-tachi-muted">
            TAURUS Vault &middot; Bitcoin's Agentic Infra Layer
          </span>
        </div>
      </div>
    </footer>
  )
}
