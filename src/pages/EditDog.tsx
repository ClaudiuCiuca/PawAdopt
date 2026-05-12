import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/forms.css"

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
  const [vaccinated, setVaccinated] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

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
        setVaccinated(data.vaccinated ? "yes" : "no");
        setGender(data.gender);
        setSize(data.size)
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
        !description||
        !vaccinated||
        !size||
        !gender
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
      vaccinated: vaccinated === "yes",
      size,
      gender,
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
    <div className="form-page">
      <h1>Edit Dog details </h1>

        {error && <p className="error-message">{error}</p>}

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
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        
        <select
          value={vaccinated}
          onChange={(event) => setVaccinated(event.target.value)}>
          <option value="" disabled>
            Vaccinated?
          </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

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
