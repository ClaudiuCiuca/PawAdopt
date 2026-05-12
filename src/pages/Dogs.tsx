import { useEffect, useState } from "react";
import type { Dog } from "../types/Dog.ts";
import DogCard from "../components/DogCard";
import "../styles/dog.css"


function Dogs() {

 const [dogs, setDogs] = useState<Dog[]>([]);
 useEffect(() => {
    const fetchDogs = async () => {
        try {
            const response = await fetch("http://localhost:3001/dogs");
            if (!response.ok) {
                throw new Error("Failed to fetch dogs");
            }

            const data = await response.json();

            setDogs(data);
        }
        catch (error) {
            console.log(error);
            
        }
        
    };

    fetchDogs();
}, []);

return (

     
    <div className="dogs-container"> 
       
        {dogs.map((dog) =>
         <DogCard key={dog.id} dog={dog}></DogCard>
        
        )}
    </div>
)


}

export default Dogs;
