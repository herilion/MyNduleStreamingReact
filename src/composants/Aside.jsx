import '../styles/aside.css'
import music from '../assets/music.png'
const Aside = () => {
    return (
        <div className="aside">
            <div className='logotext'>
                <img src={music} alt="" />
                <h2>My Ndule</h2>
            </div>
        </div>
    );
}

export default Aside;