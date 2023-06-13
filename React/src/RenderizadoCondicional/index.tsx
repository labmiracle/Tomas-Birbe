import { useState } from "react";

export function RenderizadoCondicional() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {isLogged ? (
        <>
          <p>Esta pagina solo puedo verla porque estoy logueado</p>
          <button onClick={() => setIsLogged(false)}>Log out</button>
        </>
      ) : (
        <>
          <p>Inicia sesion para ver contenido privado</p>
          <button onClick={() => setIsLogged(true)}>Log in</button>
        </>
      )}
    </>
  );
}
