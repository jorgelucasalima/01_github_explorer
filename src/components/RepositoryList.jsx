import { RepositoryItem } from "./RespositoryItem";

const dadosRepositorio = {
  nome: 'unform',
  descricao: 'Forms in React',
  link: 'https://github.com/unform/unform'
}


export function RepositoryList (){
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repositorio={dadosRepositorio}/>
        <RepositoryItem repositorio={dadosRepositorio}/>
        <RepositoryItem repositorio={dadosRepositorio}/>
        <RepositoryItem repositorio={dadosRepositorio}/>
        
      </ul>
    </section>
  )
}