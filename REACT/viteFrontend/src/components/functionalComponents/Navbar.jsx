import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="nav-list">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link> 
                    <Link to='/learn-react'><li>Learning React</li></Link>
                    <Link to='/con'><li>Contact</li></Link>
                    <Link to='/login'><li>Login</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

