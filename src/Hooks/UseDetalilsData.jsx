import { useEffect, useState } from "react";
const url = '/data/luxury.json'

const UseDetalilsData = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data);
        };

        fetchData();


    }, []);

    return { data };
};

export default UseDetalilsData;