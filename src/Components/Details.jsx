import { useParams } from "react-router-dom";
import UseDetalilsData from "../Hooks/UseDetalilsData";
import { MdAddIcCall, MdFreeBreakfast, MdOutlineDinnerDining, MdOutlineFitnessCenter, MdRoomService } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFeatherPointed, FaLocationDot, FaPersonWalkingLuggage } from "react-icons/fa6";
import { RiHotelFill } from "react-icons/ri";
import { FaPlaceOfWorship, FaSpa, FaWifi } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";
import s1 from '../assets/images/s1.jpg'

const Details = () => {
    const { data } = UseDetalilsData();
    const { id } = useParams();

    // Check if data exists and find the hotel with the matching id
    const selectedHotel = data.find((hotel) => hotel.id === parseInt(id));

    if (!selectedHotel) {
        return <div>Loading...</div>;
    }

    // Destructure the properties from selectedHotel if it's not undefined
    const {
        estate_title,
        segment_name,
        description,
        price,
        status_area,
        location,
        image,
        facilities,
        amenities,
        room_types,
        activities,
        dining_options
    } = selectedHotel;

    return (
        <div className="mt-10">
            <div className="flex flex-col lg:flex-row bg-base-100 gap-5">
                <div className="flex-1 ">
                    <img src={image} className="w-full" alt="Album" />
                </div>

                <div className="p-10 font-poppins flex-1 space-y-5 ">

                    <h2 className=" text-sky-500 font-bold text-2xl">
                        {estate_title}
                    </h2>
                    <p className="">{description}</p>

                    <div className="flex justify-between text-sky-500 border-y-2 border-sky-100 py-8">
                        <p>#{segment_name}</p>
                        <p>${price} Per Night</p>
                        <p className="flex items-center gap-2"> <RiHotelFill />
                            <span>{status_area}</span></p>

                    </div>

                </div>


            </div>
            <div className="bg-gray-300 mt-5 grid grid-cols-3 gap-5 p-5 font-poppins">
                <div className="border-r-2">
                    <div className="flex gap-2 items-center font-bold ">
                        <MdAddIcCall />
                        <h2>Call Us</h2>
                    </div>
                    <h2 className="pt-2">+123456789</h2>
                </div>
                <div className="border-r-2">
                    <div className="flex gap-2 items-center font-bold">
                        <FaLocationDot />

                        <h2>Location</h2>
                    </div>
                    <h2 className="pt-2">{location}</h2>

                </div>
                <div>
                    <div className="flex gap-2 items-center font-bold">
                        <FaPersonWalkingLuggage />
                        <h2>Arrival Time</h2>
                    </div>
                    <ul className="pt-2">
                        <li>Check-in 12 AM →
                            Check-out 12 PM</li>
                        <li>Check-in 3 AM →
                            Check-out 12 PM</li>
                    </ul>

                </div>
            </div>

            <div className="bg-slate-100 py-10 mt-5">
                <div className=" ">
                    <h2 className="uppercase  text-center mb-5 text-sky-500 font-bold text-4xl">
                        Room Types
                    </h2>
                    <div className="text-center py-5 font-poppins ">
                        <p>Explore a stay from ${price} per night for your selected dates</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {
                            room_types.map((roomType, index) => (
                                <div key={index} className="card card-compact bg-base-100  border">
                                    <figure>
                                        <img className="h-[200px] w-full" src={roomType.rimage} alt="Room Type" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{roomType.rname}</h2>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>

                <div className="">
                    <div>
                        <h2 className="text-4xl text-center uppercase
                         font-bold font-poppins text-sky-500 mt-5 py-5">
                            Facilities on Sites
                        </h2>

                        <div className="flex justify-evenly bg-slate-100 text-xl p-10">
                            <div>
                                <div className="flex gap-2 items-center text-3xl font-bold  text-sky-500">
                                    <MdFreeBreakfast />
                                    <p className="pb-2">Free Breakfast</p>

                                </div>
                                <p className="text-gray-600 py-2">Monday-Friday 6:30 - 9:00 AM </p>
                                <p className="text-gray-600">Saturday-Sunday 7:00 - 9:30 AM</p>
                            </div>

                            <div className="text-xl">
                                <div className="flex gap-2 items-center text-3xl font-bold text-sky-500">
                                    <FaSpa />
                                    <p className="pb-2">Extra Facilities</p>

                                </div>
                                {
                                    facilities.map((facilitie, index) =>
                                        <div key={index} className="flex gap-2 items-center">
                                            <FaFeatherPointed />
                                            <p className="text-gray-600" >{facilitie}</p>
                                        </div>


                                    )
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div >
                <h2 className="text-4xl uppercase text-center py-10 font-bold text-sky-500">
                    Our amenities
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-4 font-poppins text-center">
                    <div className="mx-auto space-y-5 text-center">
                        <FaWifi className="text-8xl text-sky-500" />
                        <p className="text-xl">Free Wifi</p>
                    </div>

                    <div className="mx-auto space-y-5 text-center">
                        <MdRoomService className="text-8xl text-sky-500" />
                        <p className="text-xl">24-Hour Room Service</p>
                    </div>

                    <div className="mx-auto space-y-5 text-center">
                        <MdOutlineFitnessCenter className="text-8xl text-sky-500" />
                        <p className="text-xl">Fitness Center</p>
                    </div>

                    <div className="mx-auto space-y-5 text-center">
                        <SiSecurityscorecard className="text-8xl text-sky-500" />
                        <p className="text-xl">Concierge Service</p>
                    </div>

                </div>
            </div>
            <h2 className="text-4xl mt-10 uppercase text-center py-10 font-bold text-sky-500">
                Onsite Activites
            </h2>
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 mt-5">
                <div className="flex-1 flex justify-evenly">
                    <div>
                        <div className="flex gap-2 items-center text-xl
                         mb-2 font-bold text-sky-500 border-b-2 pb-2">
                            <FaPlaceOfWorship />
                            <h2 >
                                Activities
                            </h2>
                        </div>

                        {
                            activities.map((activity, index) =>
                                <p key={index} className="text-gray-500 mb-2">{activity}</p>

                            )
                        }

                    </div>
                    <div>
                        <div className="flex gap-2 items-center 
                        text-xl mb-2 font-bold text-sky-500 border-b-2 pb-2">
                            <MdOutlineDinnerDining />
                            <h2 >
                                Dining Options
                            </h2>
                        </div>
                        {
                            dining_options.map((option, index) =>
                                <p key={index} className="text-gray-500 mb-2">{option}</p>

                            )
                        }
                    </div>
                </div>
                <div className="flex-1">
                    <img src={s1} className="w-full" alt="" />
                </div>
            </div>


        </div>
    );
};

export default Details;