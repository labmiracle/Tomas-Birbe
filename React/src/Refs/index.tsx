import { useRef } from "react";

export function Refs() {
  const nombreRef = useRef<HTMLInputElement>(null);
  const apellidoRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (nombreRef.current && apellidoRef.current) {
      console.log(nombreRef.current.value);
      console.log(apellidoRef.current.value);
    }

    (event.target as HTMLFormElement).reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input ref={nombreRef} type="text" id="nombre" />
        <label htmlFor="apellido">Apellido</label>
        <input ref={apellidoRef} type="text" id="apellido" />
        <button type="submit">Mostrar en consola</button>
      </form>
    </>
  );
}
