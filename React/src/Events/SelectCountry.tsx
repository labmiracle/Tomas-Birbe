import { useState } from 'react';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function SelectCountry() {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <>
      <p>{selectedValue ? selectedValue : 'Previsualizacion'}</p>
      <label htmlFor="countries">Elegi un pais</label>
      <select
        name="country"
        id="country"
        onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
    </>
  );
}
