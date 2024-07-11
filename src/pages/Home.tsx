import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsor from "../components/Sponsor";
import About from "../components/About";
import EventSchedule from "../components/EventSchedule";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <Header />
            <Hero />
            <Sponsor />
            <About />
            <EventSchedule />
        </div>
    );
};

export default Home;
