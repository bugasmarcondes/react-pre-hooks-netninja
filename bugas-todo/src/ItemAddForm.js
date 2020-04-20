import React, { useEffect, useState } from "react";
import M from "materialize-css";

function ItemAddForm({ createItem }) {
  const [item, setItem] = useState({
    key: "",
    title: "",
  });

  useEffect(() => {
    M.updateTextFields();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    createItem(item);

    setItem({
      key: "",
      title: "",
    });
  }

  function handleChange(e) {
    setItem({
      key: Date.now(),
      title: e.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-field col s12">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={item.title}
          />
        </div>
        <div className="input-field col s12">
          <button className="waves-effect waves-light btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default ItemAddForm;
