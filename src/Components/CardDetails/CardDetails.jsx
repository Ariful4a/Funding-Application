import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const CardDetails = () => {
    const campaignLoader = useLoaderData();
    const [isExpired, setIsExpired] = useState(false);

    if (!campaignLoader) return <p className="text-center mt-10 text-xl">Loading...</p>;

    const { title, description, minDonation, deadline, userEmail, userName, photo } = campaignLoader;

    // Check if the deadline has passed
    useEffect(() => {
        const now = new Date();
        const campaignDeadline = new Date(deadline);
        if (campaignDeadline < now) {
            setIsExpired(true);
            Swal.fire({
                icon: "error",
                title: "Campaign Expired",
                text: "This campaign has expired!",
                confirmButtonColor: "#d33",
            });
        }
    }, [deadline]);

    const handleDonate = () => {
        if (isExpired) return;
        
        Swal.fire({
            title: "Confirm Donation",
            text: `Minimum Donation Amount: $${minDonation}`,
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Donate Now",
        }).then((result) => {
            if (result.isConfirmed) {
                const donationAmount = minDonation;
                const campaignId = campaignLoader._id;
                const userId = campaignLoader.userId;
                const userEmail = campaignLoader.userEmail;
                const userName = campaignLoader.userName;
                const photo = campaignLoader.photo;
                const newDonation = { donationAmount, campaignId, userId, userEmail, userName, photo };
                fetch('http://localhost:5000/donate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newDonation),
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Thank You!",
                            text: "Your donation has been processed successfully!",
                            confirmButtonColor: "#28a745",
                        });
                    }
                })
            }   
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-500">
            <div className="w-[1000px] bg-white bg-opacity-90 rounded-3xl p-10 shadow-xl">
                <div className="text-gray-800 text-center">
                    <img src={photo} alt={title} className="w-full h-60 object-cover rounded-2xl shadow-lg mb-6 transition-transform duration-300 hover:scale-105" />
                    <h2 className="text-4xl font-extrabold text-gray-800">{title}</h2>
                    <p className="text-lg mt-4 text-gray-600">{description}</p>
                    <p className="mt-5 text-xl font-semibold text-gray-800">Minimum Donation: ${minDonation}</p>
                    <p className="text-md mt-3 text-gray-600">Deadline: {new Date(deadline).toLocaleDateString()}</p>
                    <p className="text-md mt-1 text-gray-600">Organizer: {userName} ({userEmail})</p>

                    {/* Donate Button */}
                    <button
                        onClick={handleDonate}
                        className={`mt-8 w-full py-4 text-white text-xl font-bold rounded-lg ${isExpired ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                        disabled={isExpired}
                    >
                        {isExpired ? "Expired" : "Donate Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
