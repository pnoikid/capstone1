import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts} from "../../api/api.js";


function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ProductsFetch() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    ProductsFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} />
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
          <div>{product.category}</div>
          <button onClick={() => navigate(`/products/${product.id}`)}>
            See Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
