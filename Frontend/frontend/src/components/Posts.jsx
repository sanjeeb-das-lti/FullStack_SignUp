import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../axios_helper';

const Posts = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    let token = sessionStorage.getItem('jwtoken')
    useEffect(() => {
        if (token === null || token === undefined) {
            navigate("/login")
        } else {
            request(
                "GET",
                "/api/v1/demo/hello",
                {},
                { Authorization: `Bearer ${token}` })
                .then(response =>
                    setValue(response.data))
        }
    }, [])

    return (
        <div className='min-h-screen'>
            Posts Dashboard in View
            <p>{value}</p>
        </div>
    )
}

export default Posts