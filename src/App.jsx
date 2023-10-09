import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Login from "./components/Login";
import Cart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import "./index.css";
import "./AllProducts.css";

const App = () => {
  const [userToken, setUserToken] = useState(null);

  const handleLogout = () => {
    setUserToken(null);
  };

  return (
    <div>
      <h1>Store</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {userToken ? (
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route
          path="/login"
          element={<Login userToken={userToken} setUserToken={setUserToken} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};
​
export default App;
