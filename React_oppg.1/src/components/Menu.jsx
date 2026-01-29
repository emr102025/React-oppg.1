import Dish from "./Dish";
export default function Menu({ meny }) {
  return (
    <>
      <section>
        <ul>
          <h1>Restaurant Menu</h1>
          {meny.map((item) => (
            <Dish key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </>
  );
}
