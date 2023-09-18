import { useState } from "react"

const Login = () =>{
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async () => {
    event.preventDefault();
    const response = await  fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            username: "JohnDoe",
            password: "password",
        }),
    });
    const results = await response.json()
    const userToken = results.token;
    setState({ userToken });
    

} ;


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