import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://funding-aplication-server.vercel.app/myCampaigns?email=${user.email}`)
        .then((res) => {
          setCampaigns(res.data);
        })
        .catch((error) => console.error("Error fetching campaigns:", error));
    }
  }, [user?.email]);

  // campaign delete database and client side
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://funding-aplication-server.vercel.app/campaign/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = campaigns.filter((campaign) => campaign._id !== _id);
              setCampaigns(remaining);
            }
          })
          .catch((error) => console.error("Error deleting campaign:", error));
      }
    });
  };

  return (
    <div className="container mx-auto p-4 pt-36 min-h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
    {campaigns.length === 0 ? (
      <div className="text-center mt-10">
        <h3 className="text-xl text-red-500 font-semibold">No Campaigns Found</h3>
        <p className="text-gray-600 mt-2">You haven't created any campaigns yet.</p>
      </div>
    ) : (
      <div className="w-full">
        {/* ✅ Large Device - Table View */}
        <table className="hidden md:table min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
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
                  <img src={campaign.photo} alt={campaign.title} className="w-16 h-16 object-cover mx-auto rounded" />
                </td>
                <td className="border p-2">{campaign.title}</td>
                <td className="border p-2">{campaign.type}</td>
                <td className="border p-2">${campaign.minDonation}</td>
                <td className="border p-2">{campaign.deadline}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <Link to={`/camlayout/update/${campaign._id}`}>
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* ✅ Mobile Device - Card View */}
        <div className="md:hidden flex flex-col gap-4">
          {campaigns.map((campaign) => (
            <div key={campaign._id} className="bg-gray-900 text-white p-4 rounded-lg shadow-lg flex items-center">
              <img src={campaign.photo} alt={campaign.title} className="w-20 h-20 object-cover rounded-md" />
              <div className="ml-4 flex-grow">
                <h3 className="font-bold">{campaign.title}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={`/camlayout/update/${campaign._id}`}>
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-xs">
                    Update
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(campaign._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};

export default MyCampaigns;
