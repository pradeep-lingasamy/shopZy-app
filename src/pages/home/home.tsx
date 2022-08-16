import Footer from "../../components/footer/footer";
import Sliders from "../../components/slider/Sliders";
import Banner from "./banner";


function Home(){
    return(
        <div>
            <Sliders />
            <Banner />
            <Footer />
        </div>
    )
}

export default Home;