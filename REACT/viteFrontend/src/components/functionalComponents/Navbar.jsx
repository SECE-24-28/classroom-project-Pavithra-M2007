import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import '../../css/Navbar.css';

function Navbar() {
    const [learningDropdown, setLearningDropdown] = useState(false);
    const [hooksDropdown, setHooksDropdown] = useState(false);
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="navbar">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                    {isLoggedIn && (
                        <li
                            className="dropdown"
                            onMouseEnter={() => setLearningDropdown(true)}
                            onMouseLeave={() => setLearningDropdown(false)}
                        >
                            <Link to="/learn-react">Learning React</Link>
                            {learningDropdown && (
                                <ol className="dropdown-list">
                                    <li><Link to="/props">Props</Link></li>
                                    <li><Link to="/state">State</Link></li>
                                    <li
                                        className="dropdown-nested"
                                        onMouseEnter={() => setHooksDropdown(true)}
                                        onMouseLeave={() => setHooksDropdown(false)}
                                    >
                                        <span><Link>Hooks</Link></span>
                                        {hooksDropdown && (
                                            <ol className="dropdown-list-nested">
                                                <li><Link to="/use-state">UseState</Link></li>
                                                <li><Link to="/use-effect">UseEffect</Link></li>
                                                <li><Link to="/use-effect-api">UseEffectAPI</Link></li>
                                                <li><Link to="/fake-img-api">FakeImgAPI</Link></li>
                                                <li><Link to="/use-ref">UseRef</Link></li>
                                                <li><Link to="/use-memo">UseMemo</Link></li>
                                                <li><Link to="/use-callback">UseCallback</Link></li>
                                            </ol>
                                        )}
                                    </li>
                                </ol>
                            )}
                        </li>
                    )}

                    <li><Link to="/con">Contact</Link></li>
                    {isLoggedIn ? (
                        <li><button onClick={handleLogout} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}>Logout</button></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;