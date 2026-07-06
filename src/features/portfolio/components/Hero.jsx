import { AvatarIllustration } from '@/components/shared/AvatarIllustration'
import { profile } from '@/lib/content'

export function Hero() {
  return (
    <section className="bg-surface-raised">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="section-eyebrow">Hello</p>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-snug">
            I'm <span className="text-primary">{profile.name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{profile.role}</h2>
          <p className="text-neutral-600 mt-4 max-w-md">{profile.tagline}</p>
          <a href="#resume" className="btn-primary mt-6">
            View Resume
          </a>
        </div>

        <div className="relative flex justify-center">
          <AvatarIllustration className="w-64 md:w-80" />
          <img className='absolute top-6 left-24 size-14 rounded-md text-white flex items-center justify-center font-bold text-xs' src="/icons/PS.svg" alt="adobe-photoshop" />
          <img className='absolute bottom-20 right-8 size-22 rounded-md text-white text-xs font-bold flex items-center justify-center' src="/icons/Figma.svg" alt="figma" />
          <img className='absolute bottom-6 left-8 size-18 rounded-md text-white text-xs font-bold flex items-center justify-center' src="/icons/AI.svg" alt="adobe-illustrator" />
        </div>
      </div>
    </section>
  )
}
