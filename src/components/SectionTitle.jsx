import './SectionTitle.css'

// Titre de section « /TITRE », avec un grand mot pâle optionnel en arrière-plan.
export default function SectionTitle({ id, titre, fond, variante = 'xl', className = '' }) {
  if (!fond) {
    return (
      <h2 id={id} className={`section-title__h2 section-title__h2--seul ${className}`}>
        {titre}
      </h2>
    )
  }

  return (
    <div className={`section-title section-title--${variante} ${className}`}>
      <div className="section-title__fond" aria-hidden="true">
        {fond}
      </div>
      <h2 id={id} className="section-title__h2">
        {titre}
      </h2>
    </div>
  )
}
