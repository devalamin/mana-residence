import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const HomeLayout = () => {
    return (
        <div>
           <header>
            <Navbar></Navbar>
            <Banner></Banner>
           </header>
           <main></main>
           <footer></footer>
        </div>
    );
};

export default HomeLayout;