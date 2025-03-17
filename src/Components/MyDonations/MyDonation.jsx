import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./HoloCard.css";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/myDonateCampaigns?email=${user.email}`)
        .then((res) => setDonations(res.data))
        .catch((error) => console.error("Error fetching donations:", error));
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto p-4 pt-36">
      <h2 className="text-3xl font-bold text-center text-[#00ffcc] mb-6">My Donations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation._id} className="holo-card">
            <img src={donation.photo} alt="Donation" className="holo-image" />
            <div className="holo-content">
              <h3 className="holo-title">{donation.userName}</h3>
              <p className="holo-text">💰 Donated: <span className="text-[#00ffcc]">${donation.donationAmount}</span></p>
              <p className="holo-text">👤 Owner: <span className="text-[#00ffcc]">{donation.userEmail}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
