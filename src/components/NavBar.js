import './NavBar.css';

const NavBar = () => {
    return (
        <nav class="nav-bar">
            <h2 class="my-name">Zoe</h2>
            <ul>
                <li><a>About</a></li>
                <li><a>Experience</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;