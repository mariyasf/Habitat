import { IoLocationOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const HotelList = ({ iteam }) => {
    const { estate_title,
        id,
        segment_name,
        description,
        price,
        status_area,
        location,
        image
    } = iteam;

    console.log(iteam);


    return (
        <div className="card card-compact w-50 bg-base-100 shadow-xl">
            <figure>
                <img className="h-40 w-full" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex justify-between mb-2">
                    <p className="text-gray-500">#{segment_name}</p>
                    <p className="text-gray-500">${price} Per Night</p>
                </div>

                <div className="mb-2 space-y-2">
                    <div className="flex gap-2 items-center">
                        <IoLocationOutline />
                        <p className="text-gray-500">

                            {location}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <RiHotelLine />
                        <p className="text-gray-500">{status_area}</p>
                    </div>

                </div>
                <div className="card-actions justify-end">
                    <Link to={`/hotel/${segment_name}/${id}`}>
                        <button className="btn bg-[#0EA5E9] text-white">Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HotelList;