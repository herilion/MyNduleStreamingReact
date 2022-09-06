import React from "react";
import Aside from "./Aside";
import Body from "./Body";
import Footer from "./Footer";
import '../styles/tableauMusic.css'
const TableauMusic = ({ spotify }) => {
    return (
        <section className="musicDash">
            <div className="musicBody">
                <Aside />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </section>
    );
}

export default TableauMusic;