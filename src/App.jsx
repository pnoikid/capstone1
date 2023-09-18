import { useState, useEffect } from 'react'
//import ProductItems from './components/ProductItems';
import './index.css'
import Login from './components/Login';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect (() => {
    const getAllData = async () =>{
      try {
        const response = await fetch ('https://fakestoreapi.com/products')
        const results = await response.json()
        setItems(results);
      } catch (error){
        console.error(error)
      }
    };
    getAllData();
  },[]);
 
console.log (items);
  return (
    <div>
      <h1>Hello World</h1>
      <Login />
      <ul>
        {items.map(item => (
          <li key = {item.id}>{item.title}, {item.image}</li>
        ))}
      </ul>


    </div>

  )
}

export default App
