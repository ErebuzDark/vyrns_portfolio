import { useState } from 'react'
import { Card, Tag, Image } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import { cn } from '@/lib/utils'
import { filters, portfolioItems } from '@/lib/content'

const { CheckableTag } = Tag

// Bento span pattern — cycles every 6 items to keep the grid feeling
// intentional rather than uniform. Tweak freely as items are added.
const bentoSpans = [
  'md:col-span-2 md:row-span-1',
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
  'md:col-span-2 md:row-span-1',
]

// Maps each item's Tailwind color class to a real hex value so we can bake
// it into an inline SVG placeholder image (until real photos are ready).
const colorHex = {
  'bg-neutral-200': '#e0e0e0',
  'bg-accent-brick': '#5c2a2a',
  'bg-accent-slate': '#3d4f5c',
  'bg-primary': '#4a8f6c',
}

// Builds a lightweight placeholder "photo" as an inline SVG data URI.
// Swap this for `item.image` (a real URL) once assets are ready — no other
// code needs to change, since <Image> just takes a src.
function placeholderImage(title, hex, muted) {
  const textColor = muted ? '#6b6b6b' : 'rgba(255,255,255,0.85)'
  const iconColor = muted ? '#9a9a9a' : 'rgba(255,255,255,0.6)'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
      <rect width="100%" height="100%" fill="${hex}"/>
      <g transform="translate(340,220)" fill="none" stroke="${iconColor}" stroke-width="6">
        <rect x="0" y="0" width="120" height="90" rx="8"/>
        <circle cx="30" cy="28" r="10"/>
        <path d="M0 80 L38 50 L70 72 L120 35 L120 90 L0 90 Z" fill="${iconColor}" stroke="none"/>
      </g>
      <text x="50%" y="380" fill="${textColor}" font-family="sans-serif" font-size="24" text-anchor="middle">
        Image coming soon
      </text>
    </svg>
  `.trim()
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export function PortfolioSection() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === active)

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <p className="section-eyebrow">Portfolio</p>
      <h2 className="section-title">Here Are My Latest Projects.</h2>
      <p className="text-neutral-600 mt-3 max-w-xl mx-auto">
        I enjoy creating creative graphics. I work with local and global leading brands. Look at my
        work.
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
        {filters.map((f) => (
          <CheckableTag
            key={f}
            checked={active === f}
            onChange={() => setActive(f)}
            className={cn(
              '!px-4 !py-1.5 !rounded-full !text-sm !font-medium !border-0 !transition-colors',
              active === f
                ? '!bg-primary !text-primary-foreground'
                : '!bg-transparent !text-neutral-600 hover:!bg-surface-raised'
            )}
          >
            {f}
          </CheckableTag>
        ))}
      </div>

      {/* PreviewGroup lets you click any box to view it full-size, with
          arrow-key/swipe navigation across every visible item — all from
          Ant Design's Image component, no custom modal needed. */}
      <Image.PreviewGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[9rem] gap-5 text-left">
          {visible.map((item, i) => {
            const hex = colorHex[item.color] ?? '#4a8f6c'
            const muted = item.color === 'bg-neutral-200'
            const src = item.image || placeholderImage(item.title, hex, muted)

            return (
              <Card
                key={item.id}
                hoverable
                className={cn(
                  '!rounded-radius overflow-hidden !p-0 flex flex-col',
                  bentoSpans[i % bentoSpans.length]
                )}
                styles={{ body: { padding: 0, height: '100%' } }}
              >
                <div className="flex flex-col h-full min-h-[10rem]">
                  <Image
                    src={src}
                    alt={item.title}
                    width="100%"
                    height="100%"
                    className="flex-1"
                    style={{ objectFit: 'cover', display: 'block' }}
                    wrapperStyle={{ flex: 1, display: 'block' }}
                    preview={{
                      mask: (
                        <span className="flex items-center gap-1.5 text-sm font-medium">
                          <EyeOutlined />
                          View full image
                        </span>
                      ),
                    }}
                  />
                  <div className="px-4 py-3 bg-surface">
                    <p
                      className={cn(
                        'font-medium text-sm truncate',
                        muted ? 'text-neutral-800' : 'text-neutral-900'
                      )}
                    >
                      {item.title}
                    </p>
                    <span className="text-xs text-neutral-500">{item.category}</span>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </Image.PreviewGroup>
    </section>
  )
}