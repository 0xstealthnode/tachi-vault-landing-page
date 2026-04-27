interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3l8 3v6c0 4.5 -3.5 8 -8 9c-4.5 -1 -8 -4.5 -8 -9V6l8 -3z" stroke="#bc0000" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2.2 2.2L15 10" stroke="#bc0000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SignIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 17l6 -6l3 3l7 -7" stroke="#f7931a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h6v6" stroke="#f7931a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 21h16" stroke="#f7931a" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ConnectIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="6" cy="12" r="2.5" stroke="#bc0000" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.5" stroke="#bc0000" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.5" stroke="#bc0000" strokeWidth="1.6" />
      <path d="M8.2 10.8L15.8 7M8.2 13.2L15.8 17" stroke="#bc0000" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const features: Feature[] = [
  {
    icon: <ShieldIcon />,
    title: 'Multisig vault',
    description:
      'M-of-N key sets with each share generated and stored locally. Your seed never leaves the browser.',
  },
  {
    icon: <SignIcon />,
    title: 'In-browser signing',
    description:
      'Sign Bitcoin PSBTs and VTXOs directly in the popup. No CLI, no air-gap dance — just click and approve.',
  },
  {
    icon: <ConnectIcon />,
    title: 'dApp provider',
    description:
      'Inject a wallet provider into any web app. Connect once, sign Bitcoin transactions from anywhere.',
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="border-b border-tachi-border bg-tachi-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-tachi-red">
            What it does
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-tachi-white sm:text-4xl">
            Built for serious self-custody.
          </h2>
        </div>

        <div className="grid gap-px bg-tachi-border sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-tachi-black p-8 transition-colors hover:bg-tachi-white/[0.02]"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-lg font-semibold text-tachi-white">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-tachi-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
