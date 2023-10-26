import { request } from '../axios_helper'
import { useEffect, useState } from 'react'

const AuthContent = () => {
    const [resp, setResp] = useState('');
    useEffect(() => {
        request("GET", "/message", {})
            .then((response) => {
                setResp(response.data)
            })
    }, [])

    return (
        <section>
            <div className='border-2 border-double shadow-md border-spacing-4 w-80 p-4 container mx-auto border-gray-800 rounded-md content-center'>
                <div className='flex flex-col justify-center items-start'>
                    <h2 className='font-semibold text-2xl'>Backend Response</h2>
                    <div>
                        <h4 className='pb-2 pt-2'>Content:</h4>
                        <ul className='px-6'>
                            <li className='list-disc'>{resp}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthContent