import React from 'react';
import '../styles/aside.css'
import music from '../assets/music.png'
// import { HomeIcon, SearchIcon, LibraryMusicIcon } from '@mui/icons-material';
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
            <strong>PlayLISTS</strong>
            <AsideOption title="hip Hop" />
            <AsideOption title="RNB" />
            <AsideOption title="Rock" />

        </div>
    );
}

export default Aside;