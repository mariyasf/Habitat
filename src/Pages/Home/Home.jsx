import CustomerReview from "../../Components/CustomerReview";
import About from "./About";
import Banner from "./Banner";

const Home = () => {
    document.title = 'Home'


    return (
        <div>
            <Banner />
            <About />
            <CustomerReview />

        </div>
    );
};

export default Home;