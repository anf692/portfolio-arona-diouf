import './ProjectCard.css'

export default function ProjectCard({ projet, categorie }) {
  const classeMedia = `projet__media${projet.sombre ? ' projet__media--sombre' : ''}`

  return (
    <article className="projet glass">
      <div className={classeMedia} style={{ '--projet-couleur': projet.couleur }}>
        {projet.image ? (
          <img className="projet__image" src={projet.image} alt={projet.titre} loading="lazy" />
        ) : (
          <span className="projet__legende">{projet.legende}</span>
        )}
        <span className="projet__categorie glass">{categorie}</span>
      </div>
      <div className="projet__corps">
        <h3 className="projet__titre">{projet.titre}</h3>
        <p className="projet__desc">{projet.description}</p>
        <ul className="projet__tags" aria-label="Techniques et matériel">
          {projet.tags.map((tag) => (
            <li key={tag} className="chip glass projet__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
