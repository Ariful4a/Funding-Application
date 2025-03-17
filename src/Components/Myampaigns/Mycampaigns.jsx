import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
    // console.log(campaigns)

    useEffect(() => {
        if (user?.email) {
          // console.log("User Email:", user.email);
          axios
            .get(`http://localhost:5000/myCampaigns?email=${user.email}`)
            .then((res) => {
              // console.log("Fetched Data:", res.data); 
              setCampaigns(res.data);
            })
            .catch((error) => console.error("Error fetching campaigns:", error));
        }
      }, [user?.email]);
    

  return (
    <div className="container mx-auto p-4 pt-36">
      <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Photo</th>
            <th className="border p-2">Title</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Min Donation</th>
            <th className="border p-2">Deadline</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id} className="text-center">
              <td className="border p-2">
                <img
                  src={campaign.photo}
                  alt={campaign.title}
                  className="w-16 h-16 object-cover mx-auto rounded"
                />
              </td>
              <td className="border p-2">{campaign.title}</td>
              <td className="border p-2">{campaign.type}</td>
              <td className="border p-2">${campaign.minDonation}</td>
              <td className="border p-2">{campaign.deadline}</td>
              <td className="border p-2">
                <button
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaigns;
