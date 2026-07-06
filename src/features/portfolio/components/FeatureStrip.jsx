import { BulbOutlined, EditOutlined, HighlightOutlined } from '@ant-design/icons'
import { features } from '@/lib/content'

const icons = [EditOutlined, HighlightOutlined, BulbOutlined]

export function FeatureStrip() {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-8 md:-mt-10 relative z-10">
      <div className="grid sm:grid-cols-3 gap-5">
        {features.map((f, i) => {
          const Icon = icons[i]
          return (
            <div key={f.title} className="card-soft flex items-start gap-4 shadow-sm">
              <Icon className="text-2xl text-neutral-800 mt-1" />
              <div>
                <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                <p className="text-sm text-neutral-600">{f.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
