import { LangProvider, useLang } from "./LangContext";
import { Excercise } from "./Excercise";

export function Context() {
  return (
    <LangProvider>
      <Excercise />
    </LangProvider>
  );
}
