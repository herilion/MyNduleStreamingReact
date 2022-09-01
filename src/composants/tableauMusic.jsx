import React from "react";
import music from '../assets/music.png';
const TableauMusic = () => {
    return (
        <section>
            <div className="aside">
                <div className="logo">
                    <img src={music} alt="music" />
                    <h2>My Ndule</h2>
                </div>
                <div className="listeIcons">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default TableauMusic;