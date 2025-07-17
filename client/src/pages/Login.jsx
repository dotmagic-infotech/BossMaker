// React Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    // State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === 'admin@example.com' && password === 'password123') {
            localStorage.setItem('token', 'sample-token');
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleLogin} style={styles.form}>
                <h2 style={styles.heading}>Login</h2>
                {error && <p style={styles.error}>{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100vh', backgroundColor: '#f4f4f4'
    },
    form: {
        padding: '2rem', backgroundColor: 'white', borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '300px'
    },
    heading: {
        marginBottom: '1.5rem', textAlign: 'center'
    },
    input: {
        width: '100%', padding: '10px', marginBottom: '1rem',
        border: '1px solid #ccc', borderRadius: '4px'
    },
    button: {
        width: '100%', padding: '10px', backgroundColor: '#333',
        color: 'white', border: 'none', borderRadius: '4px',
        cursor: 'pointer'
    },
    error: {
        color: 'red', marginBottom: '1rem', textAlign: 'center'
    }
};

export default Login;
