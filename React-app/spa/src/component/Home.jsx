import React from 'react';
import Header from './Header';
import Programs from './Programs';
import About from './About';
import Contact from './contact';
import Footer from './Footer';

function Home(props) {
    return (
        <>
        <Header />
        <Programs />
        <About />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;