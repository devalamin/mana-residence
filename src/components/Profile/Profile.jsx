import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../Navbar/Navbar';
import UpdateProfile from '../UpdateProfile/UpdateProfile';

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const [showForm, setShowForm] = useState(false)

    const updateProfileBtn = () => {
        setShowForm(!showForm)
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto mt-10'>
                <div className='grid grid-cols-12 gap-3'>
                    <div className='col-span-3 text-center'>
                        <div className='px-10 py-5 bg-slate-200 rounded-4xl'>
                            <div className='flex flex-col items-center space-y-3'>

                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                                <button onClick={updateProfileBtn} className='btn btn-primary'>Update Profile</button>
                                {
                                    user?.isAnonymous ? <p className='text-white'>Old User</p> : <p className='text-primary'>New User</p>
                                }
                                {
                                    user?.uid && <p>Member ID: {user?.uid}</p>
                                }
                                <div className="divider"></div>
                                <div className='text-start text-slate-700'>
                                    <p>

                                        <strong className='text-2xl text-primary'>Name:</strong> <span className='text-2xl'>{user?.displayName}</span>
                                    </p>
                                    <p>

                                        <strong className='text-2xl text-primary'>Email:</strong> <span className='text-2xl'>{user?.email}</span>
                                    </p>
                                    <p>

                                        <strong className='text-2xl text-primary'>Phone Number:</strong> <span className='text-2xl'>{user?.phoneNumber ? user?.phoneNumber : 'N/A'}</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`${showForm ? 'mt-0' : '-mt-[580px]'} transition-all duration-700 h-full col-span-6 bg-white rounded-4xl`}>
                                <UpdateProfile></UpdateProfile>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;