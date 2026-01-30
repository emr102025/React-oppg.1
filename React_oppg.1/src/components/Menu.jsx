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
          <h1 className={styles.h1}>Menu</h1>
          {sortedMenu.map((item) => (
            <Dish key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  );
}
