import React from 'react';
import SearchBar from './SearchBar';
import './Style.css'


function Home() {
    return (
        <div>
            <span>이건 홈 화면</span>
            <div>
                <SearchBar />
            </div>
        </div>
    );
}

export default Home;
