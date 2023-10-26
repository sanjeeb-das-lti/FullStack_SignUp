import { useSelector } from 'react-redux'


const Dashboard = () => {
    const loginData = useSelector(state => state.loginData);
    return (
        <div className='flex'>
            <h2 className='mx-auto font-bold text-3xl capitalize pt-6 text-blue-400'>{loginData.firstname}'s Dashboard</h2>
        </div>
    )
}

export default Dashboard