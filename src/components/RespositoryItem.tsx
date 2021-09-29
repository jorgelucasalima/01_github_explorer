interface RepositoryItemProps {
  repositorio: {
    name: string;
    description: string;
    html_url: string;
  }
}



export function RepositoryItem(props: RepositoryItemProps) {
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