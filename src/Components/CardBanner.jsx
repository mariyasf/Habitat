import { Link } from 'react-router-dom';

const CardBanner = () => {
    return (
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
    );
};

export default CardBanner;