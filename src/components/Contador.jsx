import { useState } from "react";

export function Contador() {

  const [contar, setContar] = useState(0);


  function increment(params) {
    setContar(contar + 1)
  }

  return(
    <div>
      <h2>{contar}</h2>
      <button type="button" onClick={increment}>Incrementar</button>
    </div>
  )
}