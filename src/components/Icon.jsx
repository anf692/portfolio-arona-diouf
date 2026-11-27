// Icônes SVG en trait, reprises de la maquette. Toujours décoratives (aria-hidden).

const tracés = {
  flocon: <path d="M12 2v20M4.9 6l14.2 12M19.1 6 4.9 18M9 3.5 12 6l3-2.5M9 20.5 12 18l3 2.5" />,
  fleche: <path d="M7 17 17 7M8 7h9v9" />,
  menu: <path d="M5 9h14M5 15h14" />,
  fermer: <path d="M6 6l12 12M18 6 6 18" />,
  personne: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </>
  ),
  thermometre: <path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0Z" />,
  whatsapp: <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5Z" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  facebook: (
    <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h2.5l.5-4h-3V7.5a.5.5 0 0 1 .5-.5H16V3Z" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  medaille: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9 14.5-1.5 7L12 19l4.5 2.5-1.5-7" />
    </>
  ),
}

export default function Icon({ name, size = 24, strokeWidth = 1.8, className }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {tracés[name]}
    </svg>
  )
}
