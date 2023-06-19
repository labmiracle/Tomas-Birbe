export function InputText({ id }: { id: string }) {
  return (
    <>
      <label htmlFor={id}>Escribi una nueva tarea!</label>
      <input type="text" id={id} placeholder="Comprar leche" />
    </>
  );
}
