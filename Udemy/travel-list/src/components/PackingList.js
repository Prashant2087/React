import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onResetItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((i) => (
          <Item
            item={i}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            onResetItems={onResetItems}
            key={i.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onResetItems}>Clear list</button>
      </div>
    </div>
  );
}
