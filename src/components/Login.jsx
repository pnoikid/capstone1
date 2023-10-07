import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { loginUser } from "./api";

const Login = ({ userToken, setUserToken }) => { 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); 
  const navigate = useNavigate(); 
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const results = await loginUser(username, password);
      if (results && results.token) {
        setUserToken(results.token); 
        setLoginMessage("Logged in successfully!"); 
        navigate('/'); // Navigate to home page after successful login
      }
    } catch (error) {
      setLoginMessage("Error during login"); // Display error to user
      console.error(error);
    }
  };

        return(
            
            <form onSubmit={handleSubmit}>
                
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
        )

}


 export default Login
