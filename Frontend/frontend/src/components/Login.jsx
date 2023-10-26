import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import lock from '../assets/lock.svg'
import type1 from '../assets/type1.jpg'
import user from '../assets/user.svg'
import { request } from '../axios_helper'
import { loadUser } from '../slices/login/loginSlice'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            request("POST", "/api/v1/auth/authenticate", values, {})
                .then((resp) => {
                    sessionStorage.setItem("jwtoken", resp.data.token)
                    dispatch(loadUser({
                        firstname: resp.data.firstname,
                        lastname: resp.data.lastname,
                        userid: resp.data.userid
                    }))
                    navigate("/posts")
                })
                .catch((error) => {
                    if (error.response) { // status code out of the range of 2xx
                        toast.error("The credentials are wrong. Login failed")
                    } else if (error.request) { // The request was made but no response was received
                        toast.error("Error occurred. Please try again!")
                    } else {// Error on setting up the request
                        toast.error("Please check the request.")
                    }
                });
            resetForm();
        }
    })
    return (
        <section>
            <div className='flex flex-1 w-full h-screen max-md:flex-col'>
                <div className='w-1/2 max-md:w-full'>
                    <img src={type1} alt="Notes" className='h-full w-full object-cover opacity-90' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='ml-40 relative'>
                            <h2 className='font-bold text-4xl pb-6 my-10 text-slate-600 absolute -top-40 left-5'>Login Account</h2>
                            <div className='mb-2 relative'>
                                <img src={user} alt="user" className='object-cover absolute inset-x-2 top-3' />
                                <input className='bg-slate-200 border-2 w-[344px] py-3 pl-10 rounded-md focus:border-blue-600 focus:outline-none'
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder='Email Id'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                                <p className={`${formik.touched.email && formik.errors.email ? 'text-red-500' : ''} text-sm leading-4 px-2 pt-1`}>
                                    {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                                </p>
                            </div>
                            <div className='pb-2 relative'>
                                <img src={lock} alt="user" className='object-cover absolute inset-x-2 top-3' />
                                <input className='bg-slate-200 border-2 w-[344px] py-3 pl-10 rounded-md focus:border-blue-600 focus:outline-none'
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} />
                            </div>
                            <div className='flex justify-center'>
                                <button type="submit" className='bg-purple-500 hover:bg-purple-600 text-xl w-2/3 text-white py-2 mt-6 rounded-full'>
                                    Log In
                                </button>
                            </div>
                            <div className='w-full h-1 border-1 border-gray-800 pt-6'>
                                <hr />
                            </div>
                        </div>
                        <Toaster />
                    </form>
                    <div>
                        <p className='pt-20 text-sm text-gray-500 leading-8 text-left'>
                            Not a member?
                            <Link to='/signup'><span className='text-blue-600'> Sign Up</span></Link>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login