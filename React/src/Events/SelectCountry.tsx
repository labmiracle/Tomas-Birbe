import { ChangeEvent, FormEvent, useState } from "react";
import { Select } from "../ui/Select";

export function SelectCountry() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <>
      <p>{selectedValue ? selectedValue : "Previsualizacion"}</p>

      <label htmlFor="countries">Elegi un pais</label>
      <Select
        name="country"
        id="country"
        onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </Select>
    </>
  );
}
