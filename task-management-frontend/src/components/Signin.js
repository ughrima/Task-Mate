import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/signin', {
                username,
                password,
            });
            console.log(response.data);
            // Handle the response data
        } catch (error) {
            console.error(error);
            setErrorMessage('Signin failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Signin</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signin</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Signin;
