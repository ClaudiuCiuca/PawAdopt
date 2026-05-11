import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";


import type { Dog } from "../types/Dog";

function DogDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

  const [dog, setDog] = useState<Dog | null>(null);

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

        setDog(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDog();
  }, [id]);

  if (!dog) {
    return <h1>Loading...</h1>;
  }
const handleDelete = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this dog?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    const response = await fetch(
      `http://localhost:3001/dogs/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete dog");
    }

    navigate("/dogs");
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div>
      <img src={dog.image} alt={dog.name} width="400px" />

      <h1>{dog.name}</h1>

      <p>{dog.breed}</p>
      <p>{dog.age} years old</p>
      <p>{dog.location}</p>
      <p>{dog.description}</p>

      <Link to={`/dogs/${dog.id}/edit`}>Edit Dog</Link>
      <button onClick={handleDelete}>Delete Dog</button>
    </div>
  );
}

export default DogDetails;
