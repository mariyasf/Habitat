import React, { useEffect, useState } from 'react';
import HotelList from './HotelList';
const url = '/data/luxury.json'

const Luxury = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json(url))
            .then(data => {
                setList(data);
            })

    }, [])

    return (
        <div >
            {/* <h2>luxury: {list.length}</h2> */}

            <div className='gap-4 mt-5 grid grid-cols-2 lg:grid-cols-3'>
                {
                    list.map(iteam =>
                        <HotelList
                            key={iteam.id}
                            iteam={iteam}
                            url={url}></HotelList>
                    )
                }
            </div>
        </div>
    );
};

export default Luxury;