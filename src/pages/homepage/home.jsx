import React from 'react';
import Banner from './banner/banner';
import Book from './book/book';

function Home(props) {
    return (
        <div>
            <Banner/>
            <Book/>
        </div>
    );
}

export default Home;