import { useState, useEffect } from "react";
import CardCampaign from "../CardCampaign/CardCampaign";

const Home = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/campaign")
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-xl mt-10">Loading campaigns...</p>;
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-center my-5">Home</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
                campaigns.map(campaign => (
                    <CardCampaign key={campaign._id} campaign={campaign}></CardCampaign>
                ))
            }
          </div>
        </div>
    );
};

export default Home;
