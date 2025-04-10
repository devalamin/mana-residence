import React, { Suspense } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Estates from '../Estate/Estates';
import Footer from '../Footer/Footer';

const HomeLayout = () => {

    const estatePromise = fetch('data.json')
        .then(res => res.json())


    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Estates estatePromise={estatePromise}></Estates>
                </Suspense>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;