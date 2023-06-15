import { Props } from "./Props";
import { State } from "./State";
import { Events } from "./Events";
import { RenderizadoCondicional } from "./RenderizadoCondicional";
import { Refs } from "./Refs";
import ListOfPosts from "./HOC";
import { Hooks } from "./Hooks";

function App() {
  return (
    <>
      <h1>Props</h1>
      <Props></Props>
      <h1>State</h1>
      <State></State>
      <h1>Events</h1>
      <Events></Events>
      <h1>Renderizado condicional</h1>
      <RenderizadoCondicional></RenderizadoCondicional>
      <h1>Refs</h1>
      <Refs></Refs>
      <h1>HOC</h1>
      <ListOfPosts url="https://jsonplaceholder.typicode.com/posts" />
      <h1>Hooks</h1>
      <Hooks />
    </>
  );
}

export default App;
