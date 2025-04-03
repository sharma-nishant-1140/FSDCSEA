import React from "react";
import {Link, Outlet} from 'react-router-dom';

function Home()
{
    return (
        <div>
            <div>Welcome, User</div>
            <nav>
                <ul>
                    <li>
                        <Link to="register">Register</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Home;