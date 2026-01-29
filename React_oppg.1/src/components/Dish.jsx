export default function Dish({ item }) {
  return (
    <li className="menuItem">
      <div className="menuItem-info">
        <h3>{item.tittel}</h3>
        <p>{item.ingredienser}</p>
        <p className="category">{item.kategori}</p>
      </div>
      <data value={item.price}>{item.pris}</data>
    </li>
  );
}
