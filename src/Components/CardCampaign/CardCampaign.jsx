import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardCampaign = ({ campaign }) => {
    const { _id, title, type, description, minDonation, deadline, userEmail, userName, photo } = campaign;

    return (
        <motion.div
            className="relative bg-gray-900 text-white p-5 rounded-xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 transform hover:scale-101 min-h-[320px]"
            whileHover={{ scale: 1.01 }} // Slight zoom effect
        >
            {/* Blinking Glow Effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent animate-blink border-glow"></div>

            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-md">
                <img
                    src={photo}
                    alt={title}
                    className="w-full h-full object-cover object-center transition-all duration-500 transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="relative mt-4 space-y-2">
                <h2 className="text-lg font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                    {title}
                </h2>
                <p className="text-xs text-gray-300">{type}</p>
                <p className="mt-1 text-gray-200 text-sm">{description}</p>

                {/* Donation and Deadline */}
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                    <p className="bg-gray-800 p-2 rounded-lg shadow text-green-400 flex items-center justify-center">
                        💰 Min: <span className="font-bold ml-1">{minDonation}</span>
                    </p>
                    <p className="bg-gray-800 p-2 rounded-lg shadow text-red-400 flex items-center justify-center">
                        📅 Deadline: <span className="font-bold ml-1">{deadline}</span>
                    </p>
                </div>

                {/* Creator Info */}
                <div className="mt-3 bg-gray-800 p-2 rounded-lg shadow text-center">
                    <p className="text-xs text-gray-500">Created by:</p>
                    <p className="font-bold text-white">{userName}</p>
                    <p className="text-xs text-gray-400">{userEmail}</p>
                </div>
                <Link to={`/campaigns/${_id}`}>View Details</Link>
            </div>

            {/* Glow Animation */}
            <style>
                {`
                    @keyframes blink {
                        0% { border-color: rgba(58, 129, 255, 0.7); box-shadow: 0 0 8px rgba(58, 129, 255, 0.6); }
                        50% { border-color: rgba(255, 99, 233, 0.7); box-shadow: 0 0 12px rgba(255, 99, 233, 0.6); }
                        100% { border-color: rgba(58, 129, 255, 0.7); box-shadow: 0 0 8px rgba(58, 129, 255, 0.6); }
                    }
                    .animate-blink {
                        animation: blink 1.5s infinite alternate;
                    }
                `}
            </style>
        </motion.div>
    );
};

export default CardCampaign;
