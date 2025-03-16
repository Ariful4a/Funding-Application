import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CardCampaign from "../CardCampaign/CardCampaign";

const CardsCampaign = () => {
    const loderCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(loderCampaigns);
    console.log(campaigns);
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    campaigns.map(campaign => <CardCampaign key={campaign._id} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns}></CardCampaign>)
                }
            </div>
        </div>
    );
};

export default CardsCampaign;   
