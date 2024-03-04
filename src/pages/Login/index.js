import React from 'react';
import './styles.css';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Login</h1>
                    <input placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button class="button" type="submit">Login</button>
            </form>
        </section>
        </div >
    )
}