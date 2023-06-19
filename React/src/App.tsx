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
      <h2>Props</h2>
      <Props></Props>
      <h2>State</h2>
      <State></State>
      <h2>Events</h2>
      <Events></Events>
      <h2>Renderizado condicional</h2>
      <RenderizadoCondicional></RenderizadoCondicional>
      <h2>Refs</h2>
      <Refs></Refs>
      <h2>HOC</h2>
      <ListOfPosts url="https://jsonplaceholder.typicode.com/posts" />
      <h2>Hooks</h2>
      <Hooks />
    </>
  );
}

export default App;
