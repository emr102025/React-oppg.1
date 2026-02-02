import Dish from "./Dish";
import styles from "../styles/Menu.module.css";

export default function Menu({ meny }) {
  const byCategory = ["Forrett", "Hovedrett", "Dessert"];
  const sortedMenu = [...meny].sort((firstDish, secondDish) => {
    const dishPosition1 = byCategory.indexOf(firstDish.kategori);
    const dishPosition2 = byCategory.indexOf(secondDish.kategori);

    return dishPosition1 - dishPosition2;
  });

  return (
    <>
      <section className={styles.menu}>
        <ul>
          <div className={styles.decorMenu}>
            <img
              src="../src/assets/decor.png"
              alt="Decor vintage in light yellow tone"
              className={styles.decorLeft}
            />
            <h1 className={styles.h1}>Menu</h1>
            <img
              src="../src/assets/decor.png"
              alt="Decor vintage in light yellow tone"
              className={styles.decorRight}
            />
          </div>
          {sortedMenu.map((item) => (
            <Dish key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  );
}
