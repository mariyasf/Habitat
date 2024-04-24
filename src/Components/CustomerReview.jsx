import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CutomerFeedback from "./CutomerFeedback";

const CustomerReview = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('/feedback.json')
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })

    }, []);

    return (
        <div>
            <div className='text-center grid grid-cols-3 items-center justify-center my-10'>
                <div>
                    <hr className=' border-blue-100 border' />
                </div>

                <div>
                    <h2 className='font-bold uppercase text-2xl text-sky-500'>Customer Reviews</h2>
                </div>
                <div>
                    <hr className='border border-blue-100 ' />
                </div>
            </div>

            <Marquee >
                {
                    review.map(feed =>
                        <CutomerFeedback key={feed.id} feed={feed}>

                        </CutomerFeedback>
                    )
                }
            </Marquee>

        </div>

    );
};

export default CustomerReview;
