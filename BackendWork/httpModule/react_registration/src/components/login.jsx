import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function sendData(e) {
        e.preventDefault();

        console.log(email, password);

        const response = await fetch("http://localhost:3002/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const res = await response.json();
        alert(res.message);

        if (res.success) {
            localStorage.setItem('token', 'your_generated_token');
            navigate(res.redirectTo);
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={sendData}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter email"
                />
                <br />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter password"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
