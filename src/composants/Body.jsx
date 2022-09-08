import React from 'react';
import Header from './Header';
import '../styles/body.css'
import SongRow from './SongRow';
const Body = ({ spotify }) => {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className='sons'>
                <SongRow />
            </div>

        </div>

    );
}

export default Body;