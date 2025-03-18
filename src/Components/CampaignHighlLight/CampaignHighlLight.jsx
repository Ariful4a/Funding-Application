import React, { useState, useEffect } from "react";

const CampaignHighlight = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://funding-aplication-server.vercel.app/topCampaigns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // API থেকে আসা ডেটা চেক করুন
        setCampaigns(data);
      });
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">🔥 Top Funded Campaigns</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {campaigns.map((campaign) => {
            return (
              <div key={campaign._id} className="bg-white shadow-lg p-5 rounded-lg">
                <img
                  src={campaign.photo}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{campaign.title}</h3>
                <p className="text-gray-600">
                  Raised: ${campaign.minDonation} 
                </p>
                <a
                  href={`/campaign/${campaign._id}`}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  See More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampaignHighlight;
