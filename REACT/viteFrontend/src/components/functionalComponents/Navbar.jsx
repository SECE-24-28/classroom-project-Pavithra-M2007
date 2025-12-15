import { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Navbar.css';

function Navbar() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <header className="navbar">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                    <li
                        className="dropdown"
                        onMouseEnter={() => setDropdown(true)}
                        onMouseLeave={() => setDropdown(false)}
                    >
                        <span className="link">Learning React</span>
                        {dropdown && (
                            <ol className="dropdown-list">
                                <li><Link to="/use-state" className="dropdown-link">UseState</Link></li>
                                <li><Link to="/use-effect" className="dropdown-link">UseEffect</Link></li>
                                <li><Link to="/use-memo" className="dropdown-link">UseMemo</Link></li>
                                <li><Link to="/use-ref" className="dropdown-link">UseRef</Link></li>
                                <li><Link to="/use-callback" className="dropdown-link">UseCallback</Link></li>
                            </ol>
                        )}
                    </li>

                    <li><Link to="/con">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
