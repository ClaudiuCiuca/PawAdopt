import { useState } from "react";
import { useAuth } from "../features/Auth/context/useAuth";

function Profile() {
        const { user, updateUser } = useAuth();

        const [firstName, setFirstName] = useState(
            user?.firstName || ""
        );
    
         const [lastName, setLastName] = useState(
            user?.lastName || ""
        );
    
        const [email, setEmail] = useState(
            user?.email || ""
        );

        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();

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


                alert("Profile updated successfully!");
            } 
            catch (error) {
                console.log(error);

            }

        };

    return (
        <div>
            <h1>Your Profile</h1>

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
