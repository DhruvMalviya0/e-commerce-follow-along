import {useEffect, useState} from "react";
import Navbar from "../components/nav.jsx";
import AddressCard from "../components/addressCard.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";

export default function Profile() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [personalDetails, setPersonalDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        avatarURL: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState([]);
    const [avatarError, setAvatarError] = useState(false);
    
    useEffect(() => {
        // Redirect to login if not logged in
        if (!user || !user.email) {
            navigate('/login');
            return;
        }
        
        const fetchUserProfile = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/api/v2/user/profile?email=${user.email}`);
                const data = response.data;
                console.log("Profile full data:", data);
                console.log("User data:", data.user);
                console.log("Addresses from API:", data.addresses);
                setPersonalDetails(data.user);
                setAddress(data.addresses || []);
                console.log("Addresses state after update:", data.addresses || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setError("Failed to load profile data");
                setLoading(false);
            }
        };
        
        fetchUserProfile();
    }, [user, navigate]);

    // Generate avatar URL
    const avatarUrl = personalDetails.avatarURL && !avatarError 
        ? `http://localhost:8000/${personalDetails.avatarURL}`
        : null;

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="w-full min-h-screen bg-neutral-800 p-5 flex justify-center items-center">
                    <p className="text-white text-xl">Loading profile...</p>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="w-full min-h-screen bg-neutral-800 p-5 flex justify-center items-center">
                    <p className="text-red-500 text-xl">{error}</p>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar/>
            <div className="w-full min-h-screen bg-neutral-800 p-5">
                <div className="w-full h-full bg-neutral-700 rounded-lg">
                    <div className="w-full h-max my-2 p-5">
                        <div className="w-full h-max">
                            <h1 className="text-3xl text-neutral-100">
                                Personal Details
                            </h1>
                        </div>
                        <div className="w-full h-max flex flex-col sm:flex-row p-5 gap-10">
                            <div className="w-40 h-max flex flex-col justify-center items-center gap-y-3">
                                <div className="w-full h-max text-2xl text-neutral-100 text-left">
                                    PICTURE
                                </div>
                                {avatarUrl ? (
                                    <img
                                        src={avatarUrl}
                                        alt="profile"
                                        className="w-40 h-40 rounded-full object-cover bg-gray-300"
                                        onError={() => setAvatarError(true)}
                                    />
                                ) : (
                                    <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="h-max md:flex-grow">
                                <div className="w-full h-max flex flex-col justify-center items-center gap-y-3">
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            NAME
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.name || user.name || 'Not provided'}
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            EMAIL
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.email || user.email || 'Not provided'}
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            ID
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails._id || user.id || 'Not provided'}
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="text-2xl text-neutral-100 text-left">
                                            MOBILE
                                        </div>
                                        <div className="text-lg font-light text-neutral-100 text-left break-all">
                                            {personalDetails.phoneNumber || personalDetails.phone || 'Not provided'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max my-2 p-5">
                        <div className="w-full h-max">
                            <h1 className="text-3xl text-neutral-100">
                                Addresses
                            </h1>
                        </div>
                        <div className="w-full h-max p-5">
                            <button onClick={() => navigate('/create-address')} className="w-max px-3 py-2 bg-neutral-600 text-neutral-100 rounded-md text-center hover:bg-neutral-100 hover:text-black transition-all duration-100">
                                Add Address
                            </button>
                        </div>
                        <div className="w-full h-max flex flex-col gap-5 p-5">
                            {address.length === 0 ? (
                                <div className="w-full h-max text-neutral-100 font-light text-left">
                                    No Addresses Found
                                </div>
                            ) : (
                                address.map((addr, index) => (
                                    <AddressCard key={index} {...addr}/>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}