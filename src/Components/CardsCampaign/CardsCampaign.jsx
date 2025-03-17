import { useLoaderData } from "react-router-dom";
import AllCampaingnCard from "../AllCampaingnCard/AllCardCampaingnCard";
import { useState } from "react";

const CardsCampaign = () => {
  const loaderCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loaderCampaigns);  // loaderCampaigns-কে স্টেটে রাখলাম
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = () => {
    const sorted = [...campaigns].sort((a, b) =>
      sortOrder === "asc" ? a.minDonation - b.minDonation : b.minDonation - a.minDonation
    );
    setCampaigns(sorted); // sorted ডেটা স্টেটে সেট করছি
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (!loaderCampaigns || loaderCampaigns.length === 0) {
    return <p className="text-center text-2xl text-red-500">No campaigns found!</p>;
  }

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto pt-36">
      <h1 className="text-3xl font-bold text-center mb-5">All Campaigns</h1>
      <button onClick={handleSort} className="btn btn-secondary mb-3">
        Sort by Min Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Organizer</th>
            <th>Min Donation</th>
            <th>Deadline</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <AllCampaingnCard key={campaign._id} campaign={campaign} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardsCampaign;
