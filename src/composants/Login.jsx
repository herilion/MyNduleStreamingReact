import '../styles/accueilStyle.css'
import music from '../assets/music.png'
const Login = () => {
    return (
        <section className="container">
            <div>
                <img src={music} alt="" />
                <h2>Welcome to My Ndule</h2>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email" className='label'>Email</label>
                <div><input placeholder='Votre mail' type="text" className='input' /></div>
            </div>
            <div className='inputGroup'>
                <label htmlFor="email" className='label'>Email</label>
                <div><input placeholder='Votre mot de passe' type="text" className='input' /></div>
            </div>
            <div className='buttonContain'>
                <div className='button'>Se connecter</div>
            </div>

        </section>
    );
}

export default Login;