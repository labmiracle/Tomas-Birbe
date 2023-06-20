import { Box } from "./components/Box";
import styles from "./App.module.css";

function App() {
  return (
    <main>
      <div className={styles.crafting_table}>
        <div className={styles.recipe}>
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
          <Box value="Item" />
        </div>
        <img src="arrow.jpg" alt="" width="100px" />
        <Box value="Item" />
      </div>
      <p>Inventory</p>
      <div className={styles.inventory}>
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
        <Box value="Item" />
      </div>
    </main>
  );
}

export default App;
