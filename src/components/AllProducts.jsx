import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import { useNavigate } from "react-router-dom"
function AllProducts() {
  const [products, setProducts] = useState([]);//this will show a list of all products
  const navigate = useNavigate()
  useEffect(() => { // you are using a hook
    async function ProductsFetch() { // this function will return a promise
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    ProductsFetch();
  }, []);
  console.log("product", products);
  const handleClick=(id) => { //an instance method used to
    navigate(`/products/${id}`)
  }
  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} />
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <button onClick={() =>handleClick(product.id)}>See Details</button>
          </div>
        );
      })}
    </div>
  );
}
export default AllProducts;