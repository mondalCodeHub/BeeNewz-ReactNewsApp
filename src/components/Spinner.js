import React from 'react'
import loading from './loading.gif'
// spinner (loading.gif)
export default function Spinner() {
    return (
        <div className="text-center">
            <img className='my-3' src={loading} alt="Loading GIF " />
        </div>
    )
}
