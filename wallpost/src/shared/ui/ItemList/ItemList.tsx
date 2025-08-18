import type { ReactNode } from "react";

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  onItemClick?: (item: T) => void;
}

export function ItemList<T>({ items, renderItem, onItemClick }: ItemListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li 
          key={index} 
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
