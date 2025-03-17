import { useState } from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);

    const handleAddCampaign = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const photo = form.photo.value;

        const newCampaign = { title, type, description, minDonation, deadline, userEmail, userName, photo };
        console.log(newCampaign);

        fetch("http://localhost:5000/campaign", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign added successfully!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
                console.log(data);
            });
    };

    return (
        <Fade>
            <motion.div
                className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 text-white relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                    Add a New Campaign
                </h2>
                <form onSubmit={handleAddCampaign}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label">Campaign Title</label>
                            <input type="text" name="title" required className="input input-bordered w-full text-black" />
                        </div>
                        <div>
                            <label className="label">Campaign Type</label>
                            <select name="type" className="select select-bordered w-full text-black">
                                <option>Personal Issue</option>
                                <option>Startup</option>
                                <option>Business</option>
                                <option>Creative Ideas</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="label">Description</label>
                        <textarea name="description" className="textarea textarea-bordered w-full text-black" required></textarea>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label">Minimum Donation</label>
                            <input type="number" name="minDonation" required className="input input-bordered w-full text-black" />
                        </div>
                        <div>
                            <label className="label">Deadline</label>
                            <input type="date" name="deadline" required className="input input-bordered w-full text-black" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="label">Your Email</label>
                            <input type="email" name="userEmail" value={user?.email} readOnly className="input input-bordered w-full text-black" placeholder="Enter your email" required/>
                        </div>
                        <div>
                            <label className="label">Your Name</label>
                            <input type="text" name="userName" value={user?.displayName} readOnly className="input input-bordered w-full text-black" placeholder="Enter your name" required/>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="label">Campaign Image URL</label>
                        <input
                            type="text"
                            name="photo"
                            className="input input-bordered w-full text-black"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 rounded-lg font-bold"
                    >
                        Add Campaign
                    </button>
                </form>
            </motion.div>
        </Fade>
    );
};

export default AddNewCampaign;
