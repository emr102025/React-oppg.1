import styles from "../styles/Dish.module.css";

export default function Dish({ item }) {
  return (
    <li className={styles.menuItem}>
      <div className={styles.menuInfo}>
        <h3>{item.tittel}</h3>
        <p>{item.ingredienser}</p>
        <p className={styles.category}>{item.kategori}</p>
      </div>
      <data value={item.price}>{item.pris}</data>
    </li>
  );
}
