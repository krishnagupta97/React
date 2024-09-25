import React, { useEffect, useState } from 'react'

function Github() {
    
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/krishnagupta97").then(res => res.json()).then(res => setData(res));
    }, []);

    return (
        <div>
            <h1 className='text-center text-orange-700 mt-16 text-6xl font-mono font-medium'>Github Profile</h1>
            <div className='flex justify-center items-center gap-10 my-8'>
                <div className='rounded-full'>
                    <img className='rounded-full' width="200px" src={data.avatar_url} />
                </div>
                <div className='font-mono'>
                    <p>Username : {data.login}</p>
                    <p>Location : {data.location}</p>
                    <p>Bio : {data.bio}</p>
                    <p>Followers : {data.followers}</p>
                    <p>Following : {data.following}</p>
                </div>
            </div>
        </div>
    )
}

export default Github;
