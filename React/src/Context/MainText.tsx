import { Languages } from "./types";

const content = {
  firstParagraph: {
    [Languages.ES]: "Hola mundo!",
    [Languages.EN]: "Hello, world!",
  },
  secondParagraph: {
    [Languages.ES]: "Este texto va a cambiar en funcion del idioma",
    [Languages.EN]: "This text is going to change according to the language",
  },
};

export function MainText({ language }: { language: Languages }) {
  return (
    <>
      <p>{content.firstParagraph[language]}</p>
      <p>{content.secondParagraph[language]}</p>
    </>
  );
}
