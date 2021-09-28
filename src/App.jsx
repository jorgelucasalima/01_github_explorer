import { Contador } from './components/Contador'
import { RepositoryList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {
  return (
    <>
      <RepositoryList/>
      <Contador/>
    </>
    
  )
}