import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddDog() {
const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [vaccinated, setVaccinated] = useState("false");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newDog = {
      name,
      breed,
      age,
      location,
      image,
      description,
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
    <div>
      <h1>Share details about the dog you want to donate:</h1>

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

        <input
          type="boolean"
          placeholder="Vaccinated?"
          value={vaccinated}
          onChange={(event) => setVaccinated(event.target.value)}
        />

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
