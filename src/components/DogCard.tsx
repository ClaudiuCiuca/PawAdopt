import type { Dog } from "../types/Dog.ts"
import "../styles/dogcard.css";
import { Link } from "react-router-dom";


type DogCardProps = {
    dog: Dog;
};

function DogCard({ dog }: DogCardProps) {
    return (
        <div className="dog-card">
            <Link to={`/dogs/${dog.id}`}><img src={dog.image} alt={dog.name} width="250px"></img></Link>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <p>{dog.age} years old</p>
            <p>{dog.location}</p>
            <Link to={`/dogs/${dog.id}`} className="details-button"> Find more about me</Link>
        </div>
    );
}

export default DogCard;