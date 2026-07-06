export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-primary">
      <nav className="max-w-6xl mx-auto flex items-center justify-center gap-10 py-4 px-6 text-primary-foreground text-sm font-medium relative">
        <a href="#portfolio" className="hover:opacity-80 transition-opacity">
          Portfolio
        </a>
        <img className="size-9" src="/icons/vj logo.svg" alt="" />
        <a href="#certificates" className="hover:opacity-80 transition-opacity">
          Certificates
        </a>
      </nav>
    </header>
  )
}
