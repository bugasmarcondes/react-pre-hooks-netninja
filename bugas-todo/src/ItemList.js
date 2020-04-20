import React, { useState } from "react";

function ItemList({ items, updateItem, deleteItem }) {
  function handleChange(e) {
    const updatedItem = {
      key: e.target.id,
      title: e.target.value,
    };

    updateItem(updatedItem);
  }

  function handleDelete(key) {
    deleteItem(key);
  }

  const list =
    items.length > 0 ? (
      items.map((item) => (
        <tr key={item.key}>
          <td>
            <input
              className="input-todo"
              id={item.key}
              type="text"
              value={item.title}
              onChange={handleChange}
            />
          </td>
          <td className="actions">
            <button
              className="waves-effect waves-light btn"
              onClick={() => handleDelete(item.key)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td>No item yet!</td>
      </tr>
    );

  return (
    <>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>

        <tbody>{list}</tbody>
      </table>
    </>
  );
}

export default ItemList;
