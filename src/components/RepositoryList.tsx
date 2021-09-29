import { useState, useEffect } from "react";
import { RepositoryItem } from "./RespositoryItem";
import '../styles/repositories.scss';

// api dos meus repositorios no github
//https://api.github.com/users/jorgelucasalima/repos

interface Repositorio {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList (){

  const [listaRepos, setListaRepos] = useState<Repositorio[]>([]);

  
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