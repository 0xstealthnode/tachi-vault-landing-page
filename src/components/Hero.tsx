import { Button } from './ui/button'
import { TachiWordmark } from './TachiMark'
import { CHROME_ZIP_URL, FIREFOX_ZIP_URL } from '@/lib/links'

function ChromeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.5h7.5M9 13.7L5.2 7.2M14.8 13.7l-3.7 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function FirefoxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 8c2 -3 6 -3 8 -1c2 2 1 5 -1 6c-2 1 -5 0 -5 -2c0 -1.5 1.5 -2.5 3 -2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-tachi-border"
    >
      {/* subtle radial accent — flat, no gradient overload */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(188,0,0,0.18), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:px-10 sm:py-32">
        <div className="flex justify-center">
          <TachiWordmark height={56} />
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-tachi-muted">
          Bitcoin's Agentic Infra Layer
        </p>

        <h1 className="mt-10 text-4xl font-semibold leading-tight text-tachi-white sm:text-5xl md:text-6xl">
          Self-custody for the
          <br />
          <span className="text-tachi-red">agentic era.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-tachi-muted sm:text-lg">
          TAURUS Vault is a secure multisig browser extension for Bitcoin —
          generate keys, sign transactions, and connect to dApps without ever
          exposing your seed.
        </p>

        <div
          id="download"
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
            <a href={CHROME_ZIP_URL} target="_blank" rel="noopener noreferrer">
              <ChromeIcon />
              Download for Chrome
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href={FIREFOX_ZIP_URL} target="_blank" rel="noopener noreferrer">
              <FirefoxIcon />
              Download for Firefox
            </a>
          </Button>
        </div>

        <p className="mt-6 font-mono text-xs text-tachi-muted">
          v0.1.0 · Manifest v3 · Chromium &amp; Firefox
        </p>
      </div>
    </section>
  )
}
