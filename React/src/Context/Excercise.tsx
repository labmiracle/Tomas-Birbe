import { Button } from "./Button";
import { MainText } from "./MainText";
import { useLang } from "./LangContext";
import { Languages } from "./types";

export function Excercise() {
  const { lang, setLang } = useLang();

  function switchLang() {
    if (lang === Languages.EN) {
      setLang(Languages.ES);
    } else {
      setLang(Languages.EN);
    }
  }

  return (
    <>
      <MainText language={lang} />
      <Button handler={switchLang}>Cambiar idioma</Button>
    </>
  );
}
