import React, { useState } from 'react';
import '../styles/aside.css'
import music from '../assets/music.png'
// import { HomeIcon, SearchIcon, LibraryMusicIcon } from '@mui/icons-material';
import { useDataLayervalue } from '../DataLayer';
import AsideOption from './AsideOption';
const Aside = () => {
    const [{ playlists }, dispatch] = useDataLayervalue()
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
            {playlists?.items?.map(playlist => (
                <AsideOption title={playlist.name} />
            ))}

        </div>
    );
}

export default Aside;