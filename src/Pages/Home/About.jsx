import h1 from '../../assets/images/hotel1.jpg'
import m1 from '../../assets/images/m1.jpg'
import l1 from '../../assets/images/l1.jpg'
import l2 from '../../assets/images/l2.jpg'

const About = () => {
    return (
        <div className='mt-10'>

            <div className='text-center grid grid-cols-3 items-center justify-center mb-10'>
                <div>
                    <hr className=' border-blue-100 border' />
                </div>

                <div>
                    <h2 className='font-bold uppercase text-2xl text-blue-900'>About Us</h2>
                </div>
                <div>
                    <hr className='border border-blue-100 ' />
                </div>
            </div>


            {/* OUR HOTELS */}
            <div className="lg:flex lg:flex-row-reverse gap-5 ">
                <div className='flex-1'>
                    <img className='mx-auto rounded-2xl' src={h1} alt="" />
                </div>

                <div className='flex-1 space-y-3 mx-10'>
                    <h2 className='uppercase pt-5 text-2xl font-bold text-blue-900'>OUR HOTELS</h2>
                    <p className='font-poppins text-xl'>
                        Discover our exceptional collection of hotels located in Northern Virginia.
                        We are dedicated to delivering outstanding experiences at each of our properties,
                        and we are continually seeking new opportunities for growth and expansion.
                    </p>
                    <button className='btn btn-primary text-white uppercase '>Explore More</button>
                </div>

            </div>

            {/* {WORLD - CLASS ACCOMMODATIONS} */}
            <div className="lg:flex lg:flex-row gap-5 mt-12">
                <div className='flex-1'>
                    <img className='mx-auto rounded-2xl' src={m1} alt="" />
                </div>

                <div className='flex-1 space-y-3 mx-10'>
                    <h2 className='uppercase pt-5 text-2xl font-bold text-blue-900'>WORLD-CLASS ACCOMMODATIONS</h2>
                    <p className='font-poppins  text-xl'>
                        Nestled in modern opulence, Legacy Hotel's 150 guest rooms beckon with contemporary allure,
                        inviting guests to unwind and awaken revitalized for the day ahead. With sleek design
                        and luxurious amenities, each room is a sanctuary for relaxation and rejuvenation.

                    </p>
                    <button className='btn btn-primary text-white uppercase '>Explore More</button>

                </div>
            </div>

            {/* {CULINARY EXCELLENCE } */}
            <div className="lg:flex lg:flex-row-reverse  gap-5 mt-12">
                <div className='flex-1'>
                    <img className='mx-auto rounded-2xl' src={l1} alt="" />
                </div>

                <div className='flex-1 space-y-3 mx-10'>
                    <h2 className='uppercase pt-5 text-2xl font-bold text-blue-900'>CULINARY EXCELLENCE</h2>
                    <p className='font-poppins text-xl'>
                        Indulge your senses in our culinary haven, where every dish is a masterpiece crafted with passion and precision.
                        From locally-sourced ingredients to innovative flavor combinations, our chefs elevate dining to an art form.
                        Experience gastronomic delights that tantalize the taste buds and leave a lasting impression.

                    </p>
                    <button className='btn btn-primary text-white uppercase '>Explore More</button>

                </div>
            </div>


            {/* {LEGENDARY EVENTS} */}
            <div className="lg:flex gap-5 mt-12">
                <div className='flex-1'>
                    <img className='mx-auto rounded-2xl' src={l2} alt="" />
                </div>

                <div className='flex-1 space-y-3 mx-10'>
                    <h2 className='uppercase pt-5 text-2xl font-bold text-blue-900'>LEGENDARY EVENTS</h2>
                    <p className='font-poppins text-xl'>
                        Elevate your gatherings to unforgettable experiences with our legendary events.
                        From glamorous galas to intimate soirées, our expert event planners ensure every detail is perfect.
                        Whether it's a corporate conference or a dream wedding, we transform occasions into cherished memories.

                    </p>
                    <button className='btn btn-primary text-white uppercase '>Explore More</button>

                </div>
            </div>





        </div>

    );
};

export default About;