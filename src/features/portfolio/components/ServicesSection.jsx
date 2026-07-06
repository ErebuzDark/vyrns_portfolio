import { EditOutlined } from '@ant-design/icons'
import { services } from '@/lib/content'

export function ServicesSection() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <p className="section-eyebrow">Services</p>
      <h2 className="section-title">I Provide Excellent, Reasonable</h2>
      <p className="text-neutral-600 mt-3 max-w-xl mx-auto">
        Most common methods for designing websites that work well on desktop is responsive and
        adaptive design.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {services.map((service) => (
          <div key={service.title} className="card-soft text-left shadow-sm">
            <span className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-4">
              <EditOutlined />
            </span>
            <h3 className="font-semibold text-neutral-900">{service.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
