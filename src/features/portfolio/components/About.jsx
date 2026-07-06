import { AvatarIllustration } from '@/components/shared/AvatarIllustration'
import { profile } from '@/lib/content'

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="section-eyebrow">Let Me Introduce</p>
        <h2 className="section-title">
          I'm {profile.shortName} - Designer from Philippines.
        </h2>
        <p className="text-neutral-600 mt-4 max-w-lg">
          As a graphic designer, I believe that design has the power to transform businesses and
          improve lives. With a degree in {profile.degree} and {profile.experience} of experience.
        </p>
        <a href="#contact" className="btn-primary mt-6">
          Hire me
        </a>
      </div>

      <div className="relative flex justify-center">
        <div className="w-72 h-72 rounded-full bg-surface-raised flex items-center justify-center overflow-hidden">
          <AvatarIllustration className="w-56" />
        </div>
        <span className="absolute top-4 left-40 bg-primary text-primary-foreground text-xs font-semibold rounded-full w-14 h-14 flex flex-col items-center justify-center leading-none shadow">
          {profile.age}
          <span className="text-[9px] font-normal">Years Old</span>
        </span>
      </div>
    </section>
  )
}
