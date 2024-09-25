import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext);

    const submitHandler = (event) => {
        event.preventDefault();
        setUser({ username, password });
    }

    return (
        <div className='border-2 border-dotted border-yellow-400 px-8 min-h-96 w-full flex flex-col items-center justify-center'>
            <div className='my-6'>
                <h2 className='text-4xl font-medium font-sans'>Log In</h2>
            </div>

            <div className='flex flex-col gap-y-8'>
                <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='py-1 px-2 rounded-lg w-96 text-black' />

                <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='py-1 px-2 rounded-lg w-96 text-black' />
            </div>

            <div>
                <button type='submit' onClick={submitHandler} className='py-1 px-2 rounded-lg w-96 bg-blue-700 text-white my-6'>Submit</button>
            </div>
        </div>
    )
}

export default Login;
