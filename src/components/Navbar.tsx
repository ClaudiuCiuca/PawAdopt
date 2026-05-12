import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../features/Auth/context/useAuth"



function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav>
            <Link to="/" className="logo">🐾 PawAdopt</Link>

            <div className="nav-links">
                
                {!user ? (
                    <>
                        
                        <Link to="/register">
                            Register
                        </Link>

                        <Link to="/login">
                            Login
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/dogs">
                            Dogs
                        </Link>
                        <Link to="/dogs/add">
                            Add Dog
                        </Link>
                        <Link to="/profile">
                             Edit profile
                        </Link>

                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
    
    
}
export default Navbar;