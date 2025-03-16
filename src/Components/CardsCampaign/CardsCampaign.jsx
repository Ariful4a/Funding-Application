import { useLoaderData } from "react-router-dom";
import CardCampaign from "../CardCampaign/CardCampaign";

const CardsCampaign = () => {
    const loaderCampaigns = useLoaderData();

    if (!loaderCampaigns || loaderCampaigns.length === 0) {
        return <p className="text-center text-2xl text-red-500">No campaigns found!</p>;
    }

    return (
        <div className="max-w-6xl mx-auto pt-36">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loaderCampaigns.map(campaign => (
                        <CardCampaign key={campaign._id} campaign={campaign}></CardCampaign>
                    ))
                }
            </div>
        </div>
    );
};

export default CardsCampaign;
