import React from "react";
import AiFillHome from 'react-icons'
import music from '../assets/music.png';
const TableauMusic = () => {
    return (
        <section>
            <div className="aside">
                <div className="logo">
                    <img src={music} alt="music" />
                </div>
            </div>

        </section>
    );
}

export default TableauMusic;