import './Banner.css';
import profile_pic from '../assets/profile_pic.jpg';
import NavBar from './NavBar.js';

const Banner = () => {
    return (
        <header class="banner">
            <NavBar/>
            <div>
                <h1>Hi, I'm <span class="my-name">Zoe</span>.</h1>
                <h4>Welcome to my personal portfolio.</h4>
                <p>I'm a second year Computer Science student based in Melbourne.</p>
            </div>
            <img class="profile_pic" src={profile_pic}/>
        </header>
    );
}

export default Banner;