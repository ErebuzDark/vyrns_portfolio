import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { ContactForm } from './ContactForm'
import { contactInfo } from '@/lib/content'

export function ContactSection() {
  return (
    <section id="contact" className="bg-surface-raised">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
          Send Us A Message
        </h2>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-surface rounded-radius p-6 shadow-sm">
            <ContactForm />
          </div>

          <div className="bg-surface rounded-radius p-6 shadow-sm">
            <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>

            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
              Contact Info
            </p>
            <div className="space-y-3 pb-4 border-b border-border">
              <div className="flex items-center gap-3 text-neutral-700">
                <MailOutlined className="text-primary" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <PhoneOutlined className="text-primary" />
                <span className="text-sm">{contactInfo.phone}</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mt-4 mb-2">
              Address
            </p>
            <div className="flex items-center gap-3 text-neutral-700">
              <EnvironmentOutlined className="text-primary" />
              <span className="text-sm">{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
