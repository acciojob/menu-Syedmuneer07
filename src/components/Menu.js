import React from "react";

export default function Menu({ items }) {
  if (!items || items.length === 0) {
    return <div className="menu-items empty">No items available</div>;
  }

  return (
    <div className="menu-items">
      {items.map((item) => (
        <article
          key={item.id}
          className={`menu-item menu-item-${item.category.toLowerCase()}`}
          data-test-id={`menu-item-${item.category.toLowerCase()}`}>
          <img src={item.image} alt={item.name} className="photo" />
          <div className="item-info">
            <header>
              <h4>{item.name}</h4>
              <h4 className="price">{item.price}</h4>
            </header>
            <p className="item-text">Delicious {item.name}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
