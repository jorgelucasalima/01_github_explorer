import { useState, useEffect } from "react";
import { RepositoryItem } from "./RespositoryItem";
import '../styles/repositories.scss'

// api dos meus repositorios no github
//https://api.github.com/users/jorgelucasalima/repos



export function RepositoryList (){

  const [listaRepos, setListaRepos] = useState([]);

  
  useEffect(() => {
    fetch('https://api.github.com/users/jorgelucasalima/repos')
      .then(resposta => resposta.json())
      .then(dadosGithub => setListaRepos(dadosGithub))
  }, [])

  
  

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {listaRepos.map(repositorio => {
          return <RepositoryItem key={repositorio.name} repositorio={repositorio}/>
        }) }
        
      </ul>
    </section>
  )
}