import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // React Icons থেকে User আইকন
// import { useAuthState } from 'react-firebase-hooks/auth'; // যদি অথেন্টিকেশন স্টেট ব্যবহার করেন
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="bg-primary text-white rounded-lg shadow-md p-6 w-full max-w-md">
            <div className="flex flex-col items-center justify-center">
                {user?.photoURL ? (
                    <div className="avatar mb-4">
                        <div className="w-24 rounded-full">
                            <img src={user.photoURL} alt="Profile" />
                        </div>
                    </div>
                ) : (
                    <div className="rounded-full bg-white text-primary w-24 h-24 flex items-center justify-center mb-4">
                        <FaUserCircle className="text-4xl" />
                    </div>
                )}

                <h2 className="text-xl font-semibold">{user?.displayName || 'Guest User'}</h2>
                <p className="text-sm text-white opacity-70">{user?.email || 'No email available'}</p>

                {/* এখানে আপনি আরও তথ্য দেখাতে পারেন */}
                {/* <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
          <p className="text-sm">Some extra details here...</p>
        </div> */}
            </div>
        </div>
    );
};

export default Profile;