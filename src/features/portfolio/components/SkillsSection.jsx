import { AvatarIllustration } from '@/components/shared/AvatarIllustration'
import { skills } from '@/lib/content'

export function SkillsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center order-2 md:order-1">
        <AvatarIllustration className="w-56 md:w-64" />
      </div>

      <div className="order-1 md:order-2">
        <p className="section-eyebrow">Creation is Life</p>
        <h2 className="section-title">To stay current, I routinely gain new abilities.</h2>
        <p className="text-neutral-600 mt-4">
          I have a proven track record of delivering high-quality design solutions that meet my
          clients' needs and exceed their expectations.
        </p>

        <div className="mt-8 space-y-5">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-semibold mb-1.5">
                <span className="text-primary">{skill.name}</span>
                <span className="text-neutral-700">{skill.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-surface-raised overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
