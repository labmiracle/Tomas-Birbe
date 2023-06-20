import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Ejercitacion para React!</h1>
      <nav>
        <ul>
          <NavLink to="/props">Props</NavLink>
          <NavLink to="/state">State</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/renderizado-condicional">
            Renderizado condicional
          </NavLink>
          <NavLink to="/refs">Refs</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/hoc">HOC</NavLink>
          <NavLink to="/hooks">Hooks</NavLink>
          <NavLink to="/painting-list">Painting List</NavLink>
        </ul>
      </nav>
      {/* <h2>Props</h2>
      <Props />
      <h2>State</h2>
      <State />
      <h2>Events</h2>
      <Events />
      <h2>Renderizado condicional</h2>
      <RenderizadoCondicional />
      <h2>Refs</h2>
      <Refs />
      <h2>HOC</h2>
      <ListOfPosts url="https://jsonplaceholder.typicode.com/posts" />
      <h2>Hooks</h2>
      <Hooks />
      <h2></h2>
      <PaintingList /> */}
    </>
  );
}

export default App;
