import { useState } from "react";
import { Button } from "../ui/Button";

export function RenderizadoCondicional() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {isLogged ? (
        <>
          <p>Esta pagina solo puedo verla porque estoy logueado</p>
          <Button onClick={() => setIsLogged(false)}>Log out</Button>
        </>
      ) : (
        <>
          <p>Inicia sesion para ver contenido privado</p>
          <Button onClick={() => setIsLogged(true)}>Log in</Button>
        </>
      )}
    </>
  );
}
