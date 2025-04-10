import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user);
               
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                        console.log('updated profile');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log('Error', err);
            })

    }

    return (



        <div>
            <Navbar></Navbar>
            <div className="pt-14 flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                    <form onSubmit={handleSignUp}>

                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block text-sm font-semibold text-gray-700">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoUrl"
                                name='photo'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your photo URL"
                            />
                        </div>


                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>


                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full btn-primary btn py-2 rounded-md mb-4"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <button className="btn bg-red-500 text-white"> <FaGoogle /> Sign Up With Google</button>
                        <button className="btn btn-neutral"> <FaGithub /> Sign Up With Github</button>
                    </div>
                    <p className='mt-5'>Already Have An Account? <Link to='/login' className='text-blue-600 underline'>Login Here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;