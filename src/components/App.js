import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  /**
   * Will add the new created items to the 'items' state
   * @param {Object} item the object that is created inside Form component after submiting the form (handleSubmit())
   * @returns {Undefined}
   */
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  /**
   * Will delete an item from items state based on the id that is passed on it
   * @param {string} id the id of the item needs to be deleted
   * @returns {Undefined}
   */
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  /**
   * Will toggle the 'packed' property in item object. (user can ensure an item has been packed)
   * @param {string} id the id of the item object needs to be updated
   * @returns {Undefined}
   */
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  /**
   * Clear the list if clicked on 'Clear list' button.
   * @returns {Undefined}
   */
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
