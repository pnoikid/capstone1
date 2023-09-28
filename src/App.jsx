import { useState, useEffect } from 'react'
import AllProducts from './components/AllProducts';
import Login from './components/Login';
import Cart from './components/Cart';
import "./index.css"
const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const results = await response.json()
        setItems(results);
      } catch (error) {
        console.error(error)
      }
    };
    getAllData();
  }, []);

  console.log(items);
  return (
    <div>
      <h1>Store</h1>
      <Login />
       <AllProducts />
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}, {item.image}</li>
        ))}
      </ul>


    </div>

  )
}

export default App
