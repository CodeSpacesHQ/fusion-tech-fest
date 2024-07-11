import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import EventSchedule from '../components/EventSchedule'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Header />
            <Hero />
            <EventSchedule />
        </div>
    )
}

export default Home