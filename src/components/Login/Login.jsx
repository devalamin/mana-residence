import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser, user, setError, error } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location.state);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                // console.log(result.user);
            })
            .catch(err => {
                console.log('ERROR', err.message);
                setError(err.message)

            })
    }

    return (


        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>

                    <form onSubmit={handleLogin} className="space-y-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                            />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                            />
                            <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                        </div>



                        <button type="submit" className="btn btn-primary w-full">Login</button>
                        <p className="text-red-500">{error}</p>
                    </form>


                    <p className="text-center text-sm text-gray-600">
                        New here?{' '}
                        <Link to="/register" className="link link-primary font-medium">
                            Register an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
