import styles from "./App.module.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul className={styles.links}>
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
      <Outlet />
    </>
  );
}

export default App;
