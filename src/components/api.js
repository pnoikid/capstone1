
const BASE_URL = "https://fakestoreapi.com";
​
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
​
export const fetchSingleProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
​
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
​
    if (!response.ok) {
      const responseBody = await response.text(); // get the response text
      throw new Error(
        `Error (${response.status}): ${responseBody || response.statusText}`
      );
    }
​
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
