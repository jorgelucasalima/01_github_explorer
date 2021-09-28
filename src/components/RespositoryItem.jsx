export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repositorio.nome ?? 'Default'}</strong>
      <p>{props.repositorio.descricao}</p>
      <a href={props.repositorio.link}>
        Acessar respositorio
      </a>
    </li>
  )
}