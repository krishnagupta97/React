import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) 
        return <div className='text-4xl font-normal font-mono my-8 bg-zinc-800 py-4 px-4 w-96 text-center rounded-full shadow-lg'>Please Login</div>

    return <div className='text-4xl font-normal font-mono my-8 bg-zinc-800 py-4 px-4 w-96 text-center rounded-full shadow-lg'>Welcome {user.username}</div>
}

export default Profile;
