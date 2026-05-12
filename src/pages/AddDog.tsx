import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css"


function AddDog() {
const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [error, setError] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

      if(
        !name ||
        !breed ||
        !location ||
        !image ||
        !description ||
        !vaccinated ||
        !gender ||
        !size 
        
      ) { setError ("Please fill in all the fields"); 

        return;
      }

      if (age <=0 ) {
        setError("Age must be greater than 0");
        
        return;
      }

      setError("");

    const newDog = {
      name,
      breed,
      age,
      gender,
      size,
      location,
      image,
      description,
      vaccinated: vaccinated === "yes",

    };

    try {
      const response = await fetch("http://localhost:3001/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDog),
      });

      if (!response.ok) {
        throw new Error("Failed to add dog");
      }

      navigate("/dogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-page">
      <h1>Share details about the dog you want to donate:</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dog name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />

        <select
           value={gender}
           onChange={(event) => setGender(event.target.value)}>

          <option value="" disabled>
              Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={size}
          onChange={(event) => setSize(event.target.value)}>

          <option value="" disabled>
            Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <select
          value={vaccinated}
          onChange={(event) => setVaccinated(event.target.value)}>

          <option value="" disabled>
            Vaccinated?
          </option>

          <option value="yes">
            Yes
          </option>

          <option value="no">
            No
          </option>
        </select>

        <textarea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add Dog</button>
      </form>
    </div>
  );
    
}

export default AddDog;
