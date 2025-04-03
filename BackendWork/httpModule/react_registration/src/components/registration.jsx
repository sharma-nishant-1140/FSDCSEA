import React, { useState } from "react";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function sendData(e) {
        e.preventDefault();

        console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

        const response = await fetch("http://localhost:3002/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const res = await response.json();
        alert(res.message);
    }

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={sendData}>
                <label>Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    placeholder="Enter Name" 
                />
                <br />

                <label>Email:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    placeholder="Enter Email" 
                />
                <br />

                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    placeholder="Enter Password" 
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Registration;
