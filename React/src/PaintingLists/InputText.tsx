import { Input } from "../ui/Input";

export function InputText({ id }: { id: string }) {
  return (
    <>
      <label htmlFor={id}>Escribi una nueva tarea!</label>
      <Input type="text" id={id} placeholder="Comprar leche" autoFocus />
    </>
  );
}
