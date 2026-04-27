interface Step {
  num: string
  title: string
  body: React.ReactNode
}

const chromeSteps: Step[] = [
  {
    num: '01',
    title: 'Download the .zip',
    body: 'Click "Download for Chrome" above to grab the latest build from Google Drive.',
  },
  {
    num: '02',
    title: 'Unzip the archive',
    body: 'Extract the folder anywhere on your machine — Desktop is fine.',
  },
  {
    num: '03',
    title: 'Load unpacked',
    body: (
      <>
        Open <code className="font-mono text-tachi-white">chrome://extensions</code>,
        toggle <span className="text-tachi-white">Developer Mode</span> on,
        click <span className="text-tachi-white">Load unpacked</span>, and
        select the unzipped folder.
      </>
    ),
  },
]

const firefoxSteps: Step[] = [
  {
    num: '01',
    title: 'Download the .zip',
    body: 'Click "Download for Firefox" above to grab the latest build.',
  },
  {
    num: '02',
    title: 'Unzip the archive',
    body: 'Extract the folder anywhere on your machine.',
  },
  {
    num: '03',
    title: 'Load temporary add-on',
    body: (
      <>
        Open <code className="font-mono text-tachi-white">about:debugging#/runtime/this-firefox</code>,
        click <span className="text-tachi-white">Load Temporary Add-on…</span>,
        and pick the <code className="font-mono text-tachi-white">manifest.json</code> file
        inside the unzipped folder.
      </>
    ),
  },
]

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-px bg-tachi-border">
      {steps.map((s) => (
        <li
          key={s.num}
          className="flex gap-6 bg-tachi-black p-6 sm:gap-8 sm:p-8"
        >
          <div className="font-mono text-2xl font-medium text-tachi-red">
            {s.num}
          </div>
          <div className="flex-1">
            <h4 className="text-base font-semibold text-tachi-white">
              {s.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-tachi-muted">
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function InstallSteps() {
  return (
    <section
      id="install"
      className="border-b border-tachi-border bg-tachi-black"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-tachi-red">
            Get started
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-tachi-white sm:text-4xl">
            Install in under a minute.
          </h2>
          <p className="mt-4 text-tachi-muted">
            The extension is unsigned during the beta — you'll load it directly
            from the unzipped folder.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-tachi-white">
              Chrome / Brave / Edge
            </h3>
            <StepList steps={chromeSteps} />
          </div>
          <div>
            <h3 className="mb-6 text-lg font-semibold text-tachi-white">
              Firefox
            </h3>
            <StepList steps={firefoxSteps} />
          </div>
        </div>
      </div>
    </section>
  )
}
