import React from 'react'
import music from '../assets/music.png'
import '../styles/accueilStyle.css'
const Accueil = ({ isLoginActive, setIsLoginActive }) => {
    return (
        <section className='Accueil'>
            <div className='logoName'>
                <div>
                    <img src={music} alt="music logo" />
                </div>
                <div className='NameApp'>My Ndule</div>
            </div>
            {/* <a href="/Login.jsx" className='btn'>Se connecter</a> */}
            <button
                className='btn'
                onClick={() => setIsLoginActive(true)}
            >
                Se connecter
            </button>
        </section>

    );
}

export default Accueil;