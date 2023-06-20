import { Box } from "./components/Box";
import styles from "./App.module.css";

function App() {
  return (
    <main>
      <div className={styles.crafting_table}>
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
