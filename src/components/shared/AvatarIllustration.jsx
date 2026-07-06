export function AvatarIllustration({ className = '', bg = '#eef1ef' }) {
  return (
    <svg
      viewBox="0 0 300 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Designer illustration"
    >
      <circle cx="150" cy="150" r="150" fill={bg} />
      {/* neck */}
      <rect x="130" y="170" width="40" height="40" rx="10" fill="#f0b088" />
      {/* sweater / shoulders */}
      <path
        d="M70 320 C70 250 105 210 150 210 C195 210 230 250 230 320 Z"
        fill="#4b5a63"
      />
      <path
        d="M118 214 L150 250 L182 214 L165 210 L150 224 L135 210 Z"
        fill="#f5f5f5"
      />
      {/* head */}
      <ellipse cx="150" cy="145" rx="52" ry="56" fill="#f4bd93" />
      {/* ears */}
      <circle cx="98" cy="150" r="9" fill="#f4bd93" />
      <circle cx="202" cy="150" r="9" fill="#f4bd93" />
      {/* hair */}
      <path
        d="M96 130 C92 80 118 48 150 48 C182 48 208 80 204 130 C204 108 190 100 178 104 C168 92 132 92 122 104 C110 100 96 108 96 130 Z"
        fill="#20232a"
      />
      <path d="M96 128 C90 150 92 168 100 178 C96 158 98 140 104 128 Z" fill="#20232a" />
      <path d="M204 128 C210 150 208 168 200 178 C204 158 202 140 196 128 Z" fill="#20232a" />
      {/* eyes */}
      <circle cx="128" cy="148" r="5" fill="#20232a" />
      <circle cx="172" cy="148" r="5" fill="#20232a" />
      {/* smile */}
      <path
        d="M128 168 Q150 186 172 168"
        stroke="#20232a"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* blush */}
      <circle cx="115" cy="162" r="6" fill="#f0917a" opacity="0.5" />
      <circle cx="185" cy="162" r="6" fill="#f0917a" opacity="0.5" />
    </svg>
  )
}
