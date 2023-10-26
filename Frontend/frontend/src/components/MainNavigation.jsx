import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <header>
            <div className='flex bg-slate-500 text-white w-full h-14 justify-between items-center'>
                <Link to='/'>
                    <div className=' font-sacramento font-semibold px-14 text-3xl '>Silent Thoughts</div>
                </Link>
                <div>
                    <ul className=' flex justify-center items-center'>
                        <Link to="/login">
                            <li className='mr-4 px-4 py-2 shadow-lg shadow-cyan-500/50 rounded-lg font-semibold text-center cursor-pointer'>
                                Login
                            </li>
                        </Link>
                        {/* <Link to="/signup">
                            <li className='px-4 py-2 shadow-lg  shadow-cyan-500/50 rounded-lg font-semibold text-center cursor-pointer'>Signup</li>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default MainNavigation