import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './homepage/Header';
import Hero from './homepage/Hero';
import About from './homepage/About';
import Break from './homepage/Break';
import Merced from './homepage/Merced';
import Footer from './homepage/Footer';

function Homepage(){
    return(
        <>
            <Header id="slideAnimation" />
            <Hero />
            <Break />
            <About />
            <Break />
            <Merced />
            <Footer />
        </>
    );
}

export default Homepage;