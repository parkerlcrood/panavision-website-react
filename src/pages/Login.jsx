import './admin.css';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';



function Login() {

    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            navigate("/admin");
        }
    }, []);

    const handleSubmit = async(e) => {

        e.preventDefault();
    
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"user_id": userID, "password": password}),
        });

        const data = await res.json();

        if (res.ok){
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            navigate(`/admin`, {replace : true});
        } else {
            switch (res.status){
                case 400:
                    setMessage("User ID does not exist");
                    break;
                case 401:
                    setMessage("Password is incorrect");
                    break;
                case 403:
                    setMessage("You're not allowed in there, bro");
                    break;
                case 500:
                    setMessage("Please enter an ID and Password");
                    break;
            }

        }
    }

    return <div className="adminlogin" id="top">
        <Link to="/">
            <button>Home</button>
        </Link>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="login_id">User ID: </label>
            <input type="text" className="login_id" name='login_id' value={userID} onChange={(e) => setUserID(e.target.value)}/>
            <label htmlFor="login_password">Password: </label>
            <input type="password" className="login_password" name='login_password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">
                Submit
            </button>
            <p className="loginMessage">{message}</p>
        </form>
    </div>
}



export default Login;