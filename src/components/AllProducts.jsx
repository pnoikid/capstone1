import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    async function ProductsFetch() {
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
  const handleClick = (id) => {
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
            <button onClick={() => handleClick(product.id)}>See Details</button>
          </div>
        );
      })}
    </div>
  );
}
export default AllProducts;
