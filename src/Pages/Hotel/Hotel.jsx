import { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import HotealCategryList from "./HotealCategryList";


const Hotel = () => {
    document.title = 'Hotel'
    
    const segment = 'luxury';
    const [hotelCategory, sethotelCategory] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [selectedCategoryList, setSelectedCategoryList] = useState(segment);

    const handleSortBy = (event) => {
        setSortBy(event.target.value);
    };



    useEffect(() => {
        fetch('/data/hotelList.json')
            .then(res => res.json())
            .then(data => {
                sethotelCategory(data);
            })

    }, []);

    return (
        <div className='grid lg:grid-cols-3 gap-6  mt-10'>
            <div className="border-r p-4">
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

            <div className="border col-span-2">
                <div className='flex p-4 justify-evenly '>
                    <h2 className=" text-2xl text-sky-500 font-poppins font-bold text-center border-b mx-auto">
                        EXPLORE <span className="uppercase">{selectedCategoryList}</span>
                    </h2>
                    <select name="" id=""
                        onChange={handleSortBy}
                        className="p-4 rounded-2xl border
                      ">
                        <option className="bg-white text-black" value="">Short By</option>
                        <option className="bg-white text-black" value="rating">Rating</option>
                        <option className="bg-white text-black" value="price">Prices</option>

                    </select>
                </div>

                <div className="mx-10 border-t-2">

                    {

                        selectedCategoryList === 'luxury' &&
                        <HotealCategryList
                            segment={'luxury'}
                            sortBy={sortBy} />
                    }
                    {
                        selectedCategoryList === 'resort' &&
                        <HotealCategryList
                            segment={'resort'}
                            sortBy={sortBy} />
                    }

                </div>

            </div>

        </div>
    );
};

export default Hotel;