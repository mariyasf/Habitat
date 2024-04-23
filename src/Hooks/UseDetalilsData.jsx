import { useEffect, useState } from "react";


const UseDetalilsData = (segment) => {
    const [data, setData] = useState([]);



    useEffect(() => {
        const url = `/data/${segment}.json`
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data);
        };

        fetchData();


    }, [segment]);


    return { data };
};

export default UseDetalilsData;