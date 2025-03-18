import { Link } from "react-router-dom";

const AllCampaingnCard = ({ campaign }) => {
  const {
    _id,
    title,
    type,
    minDonation,
    deadline,
    userEmail,
    userName,
    photo,
  } = campaign;

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{type}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        {userName}
        <br />
        <span className="badge badge-ghost badge-sm">{userEmail}</span>
      </td>
      <td className="font-bold">${minDonation}</td>
      <td className="hidden sm:table-cell">
        {new Date(deadline).toLocaleDateString()}
      </td>{" "}
      {/* Deadline hidden for mobile */}
      <td>
        <Link to={`/camlayout/campaigns/${_id}`}>
          <button className="btn btn-primary w-[80px] lg:btn-xs text-xs whitespace-nowrap">
            See More
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllCampaingnCard;
