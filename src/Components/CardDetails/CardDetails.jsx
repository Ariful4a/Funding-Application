import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

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
            alert("This campaign has expired!");
        }
    }, [deadline]);

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

                    {/* Move button to be part of the card */}
                    <button
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
