import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsor from "../components/Sponsor";
import About from "../components/About";

type Props = {};

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Sponsor />
            <About />
        </div>
    );
};

export default Home;
