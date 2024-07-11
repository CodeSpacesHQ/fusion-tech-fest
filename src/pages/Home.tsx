import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsor from "../components/Sponsor";
import About from "../components/About";
import EventSchedule from "../components/EventSchedule";
import KeynoteSpeakers from "../components/keynote";
import Gallery from "../components/gallery";


const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Sponsor />
            <About />
            <EventSchedule />
            <KeynoteSpeakers />
            <Gallery />
        </div>
    );
};

export default Home;
