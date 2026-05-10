import type { Dog } from "../types/dog.ts"
import "../styles/dogcard.css";
import { Link } from "react-router-dom";


type DogCardProps = {
    dog: Dog;
};

function DogCard({ dog }: DogCardProps) {
    return (
        <div className="dog-card">
            <img src={dog.image} alt={dog.name} width="250px"></img>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <p>{dog.age} years old</p>
            <p>{dog.location}</p>
            <Link to={`/dogs/${dog.id}`}> Find more about me</Link>
        </div>
    );
}

export default DogCard;