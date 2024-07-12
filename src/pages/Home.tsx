import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsor from "../components/Sponsor";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import JoinCommunity from "../components/JoinCommunity";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <Header />
            <Hero />
            <Sponsor />
            <About />

            <Gallery />
            <JoinCommunity />
            <Footer />
        </div>
    );
};

export default Home;
