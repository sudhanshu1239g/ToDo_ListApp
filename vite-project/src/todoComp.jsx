import { useState } from "react"

function TodoComp() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleOnChange = (e) => {
        setNewItem(e.target.value);
    };

    const handleAdd = () => {
        if (newItem.trim() !== '') {
            setItems((prevItems) => [...prevItems, newItem]);
            setNewItem(''); // Clear input after adding
        }
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    const handleUp = (index) => {
        const updatedItems = [...items];
        if (index > 0) {
            [updatedItems[index], updatedItems[index - 1]] = [updatedItems[index - 1], updatedItems[index]];
            setItems(updatedItems);
        }
    };

    const handleDown = (index) => {
        const updatedItems = [...items];
        if (index < items.length - 1) {
            [updatedItems[index], updatedItems[index + 1]] = [updatedItems[index + 1], updatedItems[index]];
            setItems(updatedItems);
        }
    };


    return (
        <>
            <div className="Container">
                <h1 className="head">To-Do List</h1>
                <input
                    type="text"
                    placeholder="Enter task..."
                    className="input"
                    value={newItem}
                    onChange={handleOnChange}
                />
                <button className="btn btn-success add-button" onClick={handleAdd}>Add</button>
                {items.length === 0 ? (<p className="display-empty">Nothing to Display...</p>) :
                    (
                        <ol className="items-container">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <span className="Items">{item}</span>
                                    <button className="btn btn-danger btnp" onClick={() => handleDelete(index)}>Delete</button>
                                    <button className="btn btn-info btnp" onClick={() => handleUp(index)}>👆</button>
                                    <button className="btn btn-info btnp" onClick={() => handleDown(index)}>👇</button>
                                </li>
                            ))}
                        </ol>

                    )
                }

            </div>

        </>
    )

}
export default TodoComp