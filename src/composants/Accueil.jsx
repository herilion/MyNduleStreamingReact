import React from 'react'
import music from '../assets/music.png'
import '../styles/accueilStyle.css'
const Accueil = () => {
    return (
        <section className='Accueil'>
            <div className='logoName'>
                <div>
                    <img src={music} alt="music logo" />
                </div>
                <div className='NameApp'>My Ndule</div>
            </div>
            <a href="/Login.jsx" className='btn'>Se connecter</a>
        </section>

    );
}

export default Accueil;