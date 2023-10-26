import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import silent from '../assets/silent.png'
import { request } from '../axios_helper'

const REGISTER_URL = "/api/v1/auth/register";

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            terms: false
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required("Please enter your first name.").max(20, "First Name too long."),
            lastname: Yup.string().required("Please enter your last name.").max(20, "Last Name too long."),
            email: Yup.string().email("Invalid email adress").required("Please enter your email id."),
            password: Yup.string().required("Please enter your password.").min(6, "Minimum of 6 characters length required."),
            terms: Yup.boolean().required("Terms of Service needs to be checked").isTrue("Terms of Service should be checked")
        }),
        onSubmit: values => {
            request("POST", REGISTER_URL, values, {})
                .then(
                    res => {
                        if (res.data.success) {
                            toast.success("Signup Completed, Please login !")
                        }
                    }
                    //res => alert(res.data.message)
                )
                .catch((error) => { // error is handled in catch block
                    if (error.response) { // status code out of the range of 2xx
                        // console.log("Data :", error.response.data);
                        // console.log("Status :" + error.response.status);
                        // alert("The credentials are wrong. Login failed")
                        toast.error(error.response.data.message)
                    } else if (error.request) { // The request was made but no response was received
                        console.log(error.request);
                    } else {// Error on setting up the request
                        console.log('Error', error.message);
                    }
                });
            formik.resetForm();
        }
    })
    return (
        <section>
            <div className='flex flex-1 w-full h-screen max-md:flex-col'>
                <div className='w-1/2 max-md:w-full'>
                    <img src={silent} alt="silent" className='h-full w-full object-cover' />
                </div>
                <div className='flex flex-col flex-1 m-10 px-4 rounded-lg'>
                    <h2 className='font-bold text-4xl mb-10 text-slate-600'>Sign Up</h2>
                    <p className='text-sm text-gray-500 leading-8 text-left'>Welcome to Silent Thoughts Co.</p>
                    <p className='text-sm text-gray-500 leading-8 text-left'>Register as a member for free.</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='py-2'>
                            <input type="text" placeholder='First Name' name='firstname' id='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className='w-2/3 p-2 border-2 border-gray-600 bg-gray-300 rounded-md focus:border-blue-600 focus:outline-none' />
                            <p className={`${formik.touched.firstname && formik.errors.firstname ? 'text-red-500' : ''} text-sm px-2`}>
                                {formik.touched.firstname && formik.errors.firstname ? formik.errors.firstname : ''}
                            </p>
                        </div>
                        <div className='py-2'>
                            <input type="text" placeholder='Last Name' name='lastname' id='lastname' value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className='w-2/3 p-2 border-2 border-gray-600 bg-gray-300 rounded-md focus:border-blue-600 focus:outline-none' />
                            <p className={`${formik.touched.lastname && formik.errors.lastname ? 'text-red-500' : ''} text-sm px-2`}>
                                {formik.touched.lastname && formik.errors.lastname ? formik.errors.lastname : ''}
                            </p>
                        </div>
                        <div className='py-2'>
                            <input type="email" placeholder='Email' name='email' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className='w-2/3 p-2 border-2 border-gray-600 bg-gray-300  rounded-md focus:border-blue-600 focus:outline-none' />
                            <p className={`${formik.touched.email && formik.errors.email ? 'text-red-500' : ''} text-sm px-2`}>
                                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                            </p>
                        </div>
                        <div className='py-2'>
                            <input type="password" placeholder='Password' name='password' id='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                className='w-2/3 p-2 border-2 bg-gray-300 border-gray-600 rounded-md focus:border-blue-600 focus:outline-none' />
                            <p className={`${formik.touched.password && formik.errors.password ? 'text-red-500' : ''} text-sm px-2`}>
                                {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
                            </p>
                        </div>
                        <div className='py-2 flex flex-col'>
                            <div className='flex'>
                                <input type="checkbox" name='terms' checked={formik.values.terms} value={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                <p className='px-2 text-sm text-gray-500 leading-8 text-left'>
                                    I agree to the
                                    <a href='https://policies.google.com/terms?hl=en-US' target='_blank' className='text-blue-600'>   terms of service.</a>
                                </p>
                            </div>
                            <p className={`${formik.touched.terms && formik.errors.terms ? 'text-red-500' : ''} text-sm px-2`}>
                                {formik.touched.terms && formik.errors.terms ? formik.errors.terms : ''}
                            </p>
                        </div>
                        <button type="submit" className=' w-2/3 bg-blue-600 text-white p-2 hover:bg-blue-500 hover:font-semibold'>Create Account</button>
                        <Toaster />
                    </form>
                    <div>
                        <p className='pt-20 text-sm text-gray-500 leading-8 text-left'>
                            Already a member?
                            <Link to='/login'><span className='text-blue-600'> Sign in</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp