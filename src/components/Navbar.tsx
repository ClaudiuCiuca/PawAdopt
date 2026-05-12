import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useAuth } from "../features/Auth/context/useAuth"



function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav>
            <h2>PawAdopt</h2>

            <div>
                <Link to="/">HOME</Link>
                <Link to="/dogs">Dogs looking for a HOME!</Link>
                <Link to="/dogs/1">Find here details about your new dog!</Link>
                <Link to ="/dogs/add">Do you want to donate a puppy?</Link>
                <Link to="/dogs/1/edit">Edit details about your dog</Link>
                {!user ? (
                    <>
                        <Link to="/register">
                            First step to adopt/donate a dog!
                        </Link>

                        <Link to="/login">
                            Login into your account!
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/profile">
                             Here is your profile!
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