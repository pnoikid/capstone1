import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();
  console.log("params: ", params.productId);
  useEffect(() => {
    async function singleProduct() {
      try {
        const data = await fetchSingleProduct(params.productId);
        setSingleProduct(data);
      } catch (error) {
        setError(error);
      }
    }
    singleProduct();
  }, []);
  console.log(singleProduct, "This is for a Single Product");
  return (
    <div>
      <h1>Hello World</h1>
      <img src={singleProduct.image} />
      <div>{singleProduct.title}</div>
      <div>{singleProduct.price}</div>
      <div>{singleProduct.description}</div>
      <div>{singleProduct.category}</div>
      <Link to="/">Go Back </Link>
    </div>
  );
}












