import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SecureNavigation = () => {
    const loginData = useSelector(state => state.loginData)
    return (
        <header>
            <div className='flex flex-1 bg-slate-500 text-white w-full h-14 justify-around items-center'>
                <div>
                    <Link to='/'>
                        <div className=' font-sacramento font-semibold px-14 text-3xl '>Silent Thoughts</div>
                    </Link>
                </div>
                <div className='flex flex-1 justify-center gap-6'>
                    <Link to="/posts/dashboard">
                        <div className='mr-4 px-4 py-2 shadow-lg shadow-cyan-500/50 rounded-lg font-semibold text-center cursor-pointer'>
                            Dashboard
                        </div>
                    </Link>
                    <Link to="/posts">
                        <div className='mr-4 px-4 py-2 shadow-lg shadow-cyan-500/50 rounded-lg font-semibold text-center cursor-pointer'>
                            Posts
                        </div>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <p className='px-6 text-md'>{loginData.lastname},{loginData.firstname}.{loginData.userid}</p>
                    <Link to="/login">
                        <div onClick={() => { sessionStorage.removeItem("jwtoken") }} className='mr-4 px-4 py-2 shadow-lg shadow-cyan-500/50 rounded-lg font-semibold text-center cursor-pointer'>
                            Logout
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default SecureNavigation