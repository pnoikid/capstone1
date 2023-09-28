import React, { useState } from 'react';

const Cart = () => {
    const [items, setItems] = useState([]);

    const addToCart = (item) => {
        setItems([...items, item]);
    };

    const removeFromCart = (item) => {
        const newItems = items.filter((i) => i !== item);
        setItems(newItems);
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.title}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
