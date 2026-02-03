import Dish from "./Dish";
import styles from "../styles/Menu.module.css";
import decor from "/decor.png";

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
        <div className={styles.inner_menu}>
          <div className={styles.decorMenu}>
            <img
              src={decor}
              alt="Decor vintage in light yellow tone"
              className={styles.decorLeft}
            />
            <h1 className={styles.h1}>Menu</h1>
            <img
              src={decor}
              alt="Decor vintage in light yellow tone"
              className={styles.decorRight}
            />
          </div>
          <ul>
            {sortedMenu.map((item, index) => (
              <div key={item.id}>
                {(index === 0 ||
                  item.kategori !== sortedMenu[index - 1].kategori) && (
                  <h2 className={styles.h2}>
                    {item.kategori === "Forrett" && "Appetizers"}
                    {item.kategori === "Hovedrett" && "Main Dishes"}
                    {item.kategori === "Dessert" && "Desserts"}
                  </h2>
                )}
                <Dish item={item} />
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
