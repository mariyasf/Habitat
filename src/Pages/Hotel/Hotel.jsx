import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import HotealCategryList from "./HotealCategryList";
import CardBanner from "../../Components/CardBanner";
import { Link } from "react-router-dom";
import img from '../../assets/images/hb1.jpg'

const Hotel = () => {
    document.title = 'Hotel'

    const segment = 'luxury';
    const [hotelCategory, sethotelCategory] = useState([]);
    const [selectedCategoryList, setSelectedCategoryList] = useState(segment);




    useEffect(() => {
        fetch('/data/hotelList.json')
            .then(res => res.json())
            .then(data => {
                sethotelCategory(data);
            })

    }, []);

    return (
        <div>
            <div className='relative flex justify-center items-center font-poppins'>

                <img className='w-full h-[450px]' src={img} alt="" />
                <div className='bg-slate-500 absolute h-60 w-2/3  bg-opacity-50 text-center p-10'>
                    <p className='text-4xl text-center pb-5 text-white'>
                        Hotel List
                    </p>
                    <Link to={'/'}>
                        <button className='btn bg-[#0EA5E9] w-[400px] text-white border-none text-2xl'>Back To Home</button>
                    </Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 gap-6  mt-10 max-w-6xl mx-auto'>
                <div className="border-r ">
                    <h2 className="text-2xl font-poppins text-sky-500 font-bold pb-5">
                        Category List
                    </h2>
                    {
                        hotelCategory.map(list =>
                            <CategoryList
                                setSelectedCategoryList={setSelectedCategoryList}
                                key={list.id}
                                list={list} ></CategoryList>
                        )
                    }
                </div>

                <div className=" col-span-2">
                    <div className='flex   justify-evenly '>
                        <h2 className=" text-2xl text-sky-500 pb-4 font-poppins font-bold text-center mx-auto">
                            EXPLORE  <span className="uppercase"> {selectedCategoryList}</span>
                        </h2>
                    </div>

                    <div className="mx-10 border-t-2">
                        {
                            selectedCategoryList &&
                            <HotealCategryList
                                segment={selectedCategoryList}
                            />
                        }

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hotel;