import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="wrap py-16 sm:py-24">
      <p className="text-[11px] tracking-[0.22em] text-muted uppercase">404</p>
      <h1 className="mt-3 font-serif text-[clamp(2.2rem,8vw,4.5rem)] font-extrabold tracking-tight">
        This page is off-camera.
      </h1>
      <p className="mt-4 max-w-md text-muted">The story you&apos;re looking for isn&apos;t here — the work still is.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="rounded-full bg-ink px-6 py-3.5 text-center text-ivory">
          Back home
        </Link>
        <Link to="/#work" className="rounded-full border border-line px-6 py-3.5 text-center">
          View work
        </Link>
      </div>
    </main>
  )
}
