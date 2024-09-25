import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();
    return (
        <div className='text-3xl font-mono font-semibold flex justify-center items-center p-40 m-2 border-double border-4 border-orange-700'>
            User-ID: {userid}
        </div>
    )
}

export default User;
