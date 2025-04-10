import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const { updateUserProfile, setLoading, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleUpdateProfile = (e) => {
        e.preventDefault()


        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const phone = e.target.phone.value;

        const info = {
            displayName: name,
            photoURL: photo,
            phoneNumber: phone
        }
        // console.log(info);
        updateUserProfile(info)
            .then(() => {
                setLoading(false)
                navigate('/profile')
                console.log('profile updated');
            })
            .catch(err => {
                console.log(err);
            })
        // console.log(name, photo, phone);
    }


    return (
        <div>
            <div className="flex justify-center py-8 items-center bg-transparent">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                    <form onSubmit={handleUpdateProfile}>

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
                                type="text"
                                id="photoUrl"
                                name='photo'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your photo URL"
                            />
                        </div>





                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="password"
                                name='phone'
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter New Phone Number"
                            />
                        </div>


                        <button
                            type="submit"
                            className="w-full btn-primary btn py-2 rounded-md"
                        >
                            Update Profile
                        </button>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;