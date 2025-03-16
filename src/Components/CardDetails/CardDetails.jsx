import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CardDetails = () => {
    const campaignLoader = useLoaderData();
    const [isExpired, setIsExpired] = useState(false);
    const [donating, setDonating] = useState(false);

    if (!campaignLoader) return <p className="text-center mt-10 text-xl">লোড হচ্ছে...</p>;

    const { title, description, minDonation, deadline, userEmail, userName, photo } = campaignLoader;

    // donation deadline check
    useEffect(() => {
        const now = new Date();
        const campaignDeadline = new Date(deadline);
        if (campaignDeadline < now) {
            setIsExpired(true);
            alert("এই ক্যাম্পেইনের সময় শেষ!");
        }
    }, [deadline]);

    // donation process
    const handleDonate = async () => {
        try {
            setDonating(true); // loading state set
    
            // donation data creation
            const donationData = {
                campaignId: campaignLoader.id, // campaign id
                donationAmount: minDonation,  // minimum donation amount
                userName: userName,
                userEmail: userEmail,
                photo: photo,
                createdAt: new Date(),
                updatedAt: new Date(),
            };  
    
            // donation data send to server (MongoDB)
            const response = await fetch('http://localhost:5000/donate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(donationData),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                
                Swal.fire({
                    title: "Success!",
                    text: "ডোনেশন সফল! আপনার অবদানের জন্য ধন্যবাদ।",
                    icon: "success",
                    draggable: true, 
                });
            } else {
                Swal.fire({
                    title: "Failed!",
                    text: `ডোনেশন ব্যর্থ: ${result.message}`,
                    icon: "error",
                    draggable: true,
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "আপনার ডোনেশন প্রক্রিয়ায় কিছু সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
                icon: "error",
                draggable: true,
            });
        } finally {
            setDonating(false); 
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-500">
            <div className="w-[1000px] bg-white bg-opacity-90 rounded-3xl p-10 shadow-xl">
                <div className="text-gray-800 text-center">
                    <img src={photo} alt={title} className="w-full h-60 object-cover rounded-2xl shadow-lg mb-6 transition-transform duration-300 hover:scale-105" />
                    <h2 className="text-4xl font-extrabold text-gray-800">{title}</h2>
                    <p className="text-lg mt-4 text-gray-600">{description}</p>
                    <p className="mt-5 text-xl font-semibold text-gray-800">মিনিমাম ডোনেশন: ${minDonation}</p>
                    <p className="text-md mt-3 text-gray-600">ডেডলাইন: {new Date(deadline).toLocaleDateString()}</p>
                    <p className="text-md mt-1 text-gray-600">আয়োজক: {userName} ({userEmail})</p>

                    <button 
                        className={`mt-8 w-full py-4 text-white text-xl font-bold rounded-lg ${isExpired ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                        disabled={isExpired}
                        onClick={handleDonate}
                    >
                        {isExpired ? "সময়ের শেষ" : donating ? "ডোনেশন প্রক্রিয়াধীন..." : "ডোনেট করুন"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
