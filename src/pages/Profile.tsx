import { useState } from "react";
import { useAuth } from "../features/Auth/context/useAuth";
import "../styles/forms.css"
import { toast } from "react-toastify";

function Profile() {
        const { user, updateUser } = useAuth();
        const [error, setError] = useState("");

        const [firstName, setFirstName] = useState(
            user?.firstName || ""
        );
    
         const [lastName, setLastName] = useState(
            user?.lastName || ""
        );
    
        const [email, setEmail] = useState(
            user?.email || ""
        );

        const handleSubmit = async (event: React.SubmitEvent) => {
            event.preventDefault();
            if (!firstName || !lastName || !email) {
                setError("Please fill in all fields");
                return;
            }

            setError("");

            if (!user) {
                return;
            }

            const updatedUser = {
                ...user,
                firstName,
                lastName,
                email,
            };

            try {
                const response = await fetch(`http://localhost:3001/users/${user.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedUser),
                });
                
                if (!response.ok) {
                    throw new Error("Failed to update profile");
                }

                const data = await response.json();

                updateUser(data);


                toast.success("Profile updated successfully!");
            } 
            catch (error) {
                toast.error("Something went wrong. Please try again");

            }

        };

    return (
        <div className="form-page">
            <h1>Your Profile</h1>

            {error && <p className="error-message">{error}</p>}
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(event) =>setFirstName(event.target.value)}>

                </input>
        

                <input
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}>
                </input>
        

                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}>
                </input>
        

                <button type="submit">
                     Save Profile
                </button>
            </form>
        </div>
    );
}

export default Profile;
