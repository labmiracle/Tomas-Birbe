import React, { useContext, useState } from "react";
import { Languages } from "./types";

type LangContext = { lang: Languages; setLang: React.Dispatch<Languages> };

const LangContext = React.createContext<LangContext | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState(Languages.ES);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === null) {
    throw new Error("Hey, context isn't defined");
  }
  return context;
}
