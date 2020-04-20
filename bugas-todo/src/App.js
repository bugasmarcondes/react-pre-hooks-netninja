import React, { Component } from "react";
import ItemAddForm from "./ItemAddForm";
import ItemList from "./ItemList";

class App extends Component {
  state = {
    items: [
      {
        key: 1,
        title: "delectus aut autem",
      },
      {
        key: 2,
        title: "quis ut nam facilis et officia qui",
      },
      {
        key: 3,
        title: "fugiat veniam minus",
      },
    ],
  };
  createItem = (newItem) => {
    this.setState({
      items: [...this.state.items, newItem],
    });
  };
  updateItem = (updatedItem) => {
    const items = this.state.items;

    items.map((item) => {
      if (item.key === parseInt(updatedItem.key)) {
        item.title = updatedItem.title;
      }
    });

    this.setState({
      items,
    });
  };
  deleteItem = (deleteItemKey) => {
    const filteredItems = this.state.items.filter(
      (item) => item.key !== deleteItemKey
    );

    this.setState({
      items: filteredItems,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="center-align">Marcondes TodoApp</h1>
        <ItemAddForm createItem={this.createItem} />
        <ItemList
          items={this.state.items}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
