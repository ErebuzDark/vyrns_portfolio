import { profile } from '@/lib/content'

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  )
}
