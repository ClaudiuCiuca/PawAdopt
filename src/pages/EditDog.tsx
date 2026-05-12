import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDog() {
const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/dogs/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch dog");
        }

        const data = await response.json();

        setName(data.name);
        setBreed(data.breed);
        setAge(data.age);
        setLocation(data.location);
        setImage(data.image);
        setDescription(data.description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDog();
  }, [id]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

        if(
        !name ||
        !breed ||
        !location ||
        !image ||
        !description
      ) { setError ("Please fill in all the fields"); 

        return;
      }

      if (age <=0 ) {
        setError("Age must be greater than 0");
        
        return;
      }

      setError("");


    const updatedDog = {
      name,
      breed,
      age,
      location,
      image,
      description,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/dogs/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDog),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update dog");
      }

      navigate("/dogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Edit Dog details </h1>

        {error && <p>{error}</p>}
        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="text"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />

        <input
          type="number"
          value={age}
          onChange={(event) => setAge(Number(event.target.value))}
        />

        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
    
}

export default EditDog;
