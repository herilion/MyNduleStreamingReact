import React from 'react';
import Header from './Header';
import '../styles/body.css'
import { useDataLayervalue } from '../DataLayer';
const Body = ({ spotify }) => {
    const [{ new_music_friday }, dispatch] = useDataLayervalue()
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div>
                <img src={new_music_friday?.images[0].url}
                    alt="" />
                <div>
                    <strong>PLAYLIST</strong>
                    <h2>New Music Friday</h2>
                    <p>{new_music_friday?.description}</p>
                </div>
            </div>
            <div className='songs'>
                {new_music_friday?.tracks.items.map(item => {
                    <SongRow track={item.track} />
                })}

            </div>
        </div>

    );
}

export default Body;