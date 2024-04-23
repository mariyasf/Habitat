import React, { useEffect, useState } from 'react';
import HotelList from '../../Components/HotelList';

const HotealCategryList = ({ segment }) => {
    const [list, setList] = useState([]);


    useEffect(() => {
        const url = `/data/${segment}.json`

        fetch(url)
            .then(res => res.json(url))
            .then(data => {
                setList(data);
            })

    }, [segment])

    return (
        <div >
            {/* <h2>luxury: {list.length}</h2> */}

            <div className='gap-4 mt-5 grid grid-cols-2 lg:grid-cols-3'>
                {
                    list.map(iteam =>
                        <HotelList
                            key={iteam.id}
                            iteam={iteam}
                        ></HotelList>
                    )
                }
            </div>
        </div>
    );
};

export default HotealCategryList;