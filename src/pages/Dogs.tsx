import { useEffect, useState } from "react";


function Dogs() {

 const [dogs, setDogs] = useState([]);
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
    <div> 
        <h1> Dogs looking for a home</h1>

        {dogs.map((dog: any) =>
         <div key={dog.id}>
            <h2>{dog.name}</h2>
            <p>{dog.breed}</p>
            <img src={dog.image} alt={dog.name} width="250px"/>
        </div>
        
        )}
    </div>
)


}

export default Dogs;
