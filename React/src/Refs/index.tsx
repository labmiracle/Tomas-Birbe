import { useRef } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import styles from "./index.module.css";

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
        <div className={styles.field}>
          <label htmlFor="nombre">Nombre</label>
          <Input ref={nombreRef} type="text" id="nombre" />
        </div>
        <div className={styles.field}>
          <label htmlFor="apellido">Apellido</label>
          <Input ref={apellidoRef} type="text" id="apellido" />
        </div>
        <Button type="submit">Mostrar en consola</Button>
      </form>
    </>
  );
}
