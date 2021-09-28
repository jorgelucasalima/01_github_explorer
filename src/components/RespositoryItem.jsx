export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repositorio.name}</strong>
      <p>{props.repositorio.description}</p>
      <a href={props.repositorio.html_url}>
        Acessar respositorio
      </a>
    </li>
  )
}