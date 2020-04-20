- /public/index.html
- /src/index.js
- /src/index.css
    - Imported fonts, materialize.css and also created our own customized css

- /src/App.js
    - Class component where we set the state of our app, and also declared the CRUD functions that will interact with state

- /src/ItemList.js
    - Functional component for reading list of items
    - Handle change() and delete()
        function handleChange(e) {
            const updatedItem = { key: e.target.id, title: e.target.value, };
            updateItem(updatedItem);
        }
        function handleDelete(key) { deleteItem(key); }

- /src/ItemAddForm.js
    - Functional component to handle create() method
        const [item, setItem] = useState({ key: "", title: "", });
        useEffect(() => { M.updateTextFields(); }, []);
        function handleSubmit(e) {
            e.preventDefault();
            createItem(item);
            setItem({ key: "", title: "", });
        }
        function handleChange(e) {
            setItem({ key: Date.now(), title: e.target.value, });
        }