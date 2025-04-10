import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const links = <div className='md:flex space-x-5 text-xl'>
        <NavLink to='/' className='active:text-primary focus:text-primary focus:underline'>Home</NavLink>
        <NavLink className='active:text-primary focus:text-primary focus:underline'>Properties</NavLink>
        {
            !user && <div className='space-x-4'>
                <NavLink to='/login' className='active:text-primary focus:text-primary focus:underline'>Login</NavLink>
                <NavLink to='/register' className='active:text-primary focus:text-primary focus:underline'>Register</NavLink>
            </div>
        }
        {
            user && <NavLink to='/profile' className='active:text-primary focus:text-primary focus:underline'>Profile</NavLink>
        }

    </div>



    // console.log(user);
    return (
        <div className='bg-base-300'>
            <div className='w-11/12 mx-auto'>
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2">
                                {
                                    links
                                }
                            </ul>
                        </div>
                        <Link to='/' className="text-2xl">Mana <span className='font-bold text-primary'>Residence</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.email ? <div className='flex items-center space-x-2'>
                                <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                    <div>
                                        {
                                            user?.photoURL ?
                                                <img className='h-12 w-12 rounded-full object-cover' src={user?.photoURL} alt="" />
                                                : <FaUser className='text-2xl' />
                                        }
                                    </div>
                                </div>


                                <button onClick={logOutUser} className='btn btn-error'>Log Out</button>

                            </div> : <Link to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;