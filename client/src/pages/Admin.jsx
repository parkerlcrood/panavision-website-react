import './admin.css';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';



function Admin() {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchAdmin = async () => {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:5000/api/auth/admin",{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if(!res.ok) {
                navigate("/login");
                return;
            }

            const data = await res.json();
            console.log(data);
            setUser(data);
        };

        fetchAdmin();   
    }, [navigate]);

    return (
        <div className="adminpanel" id="top">
            <p>Hello, admin {user?.user_name}</p>
        </div>
    );
}

export default Admin;