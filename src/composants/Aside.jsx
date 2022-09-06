import React from 'react';
import '../styles/aside.css'
import music from '../assets/music.png'
import AsideOption from './AsideOption';
const Aside = () => {
    return (
        <div className="aside">
            <div className='logotext'>
                <img src={music} alt="" />
                <h2>My Ndule</h2>
            </div>
            <AsideOption title="Accueil" />
            <AsideOption title="Recherche" />
            <AsideOption title="Bibliothèque" />

        </div>
    );
}

export default Aside;