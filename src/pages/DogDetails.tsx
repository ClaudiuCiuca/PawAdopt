import { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import "../styles/dogdetails.css";


import type { Dog } from "../types/Dog";

function DogDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

  const [dog, setDog] = useState<Dog | null>(null);
  const [showModal, setShowModal] = useState(false);

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
    <div className="dog-details">
      <img src={dog.image} alt={dog.name} width="400px" />

      <h1>{dog.name}</h1>

      <p>{dog.breed}</p>
      <p>{dog.age} years old</p>
      <p>{dog.location}</p>
      <p>{dog.description}</p>
      <div className="dog-actions">
        <Link to={`/dogs/${dog.id}/edit`}>Edit Dog</Link>
        <button className="adopt-button" onClick = {() => setShowModal(true)}>Adopt</button>
      </div>
    {showModal && (
        <ConfirmModal
            message="Do you want to adopt me?"
            onConfirm={handleDelete}
            onCancel={() => setShowModal(false)}>
        </ConfirmModal>
    )}
      
    </div>
  );
}

export default DogDetails;
