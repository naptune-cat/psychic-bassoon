import React, { useEffect, useState } from 'react';
import { ref as dbRef, set, get,getDatabase } from 'firebase/database';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase.js'; // Ensure this path is correct
import Card from './Card.jsx';
const pets = [
    {
      image: 'https://media.istockphoto.com/id/597658336/photo/sadness.jpg?s=2048x2048&w=is&k=20&c=AA99rIo6IQJzs0UASDhgoSnFqr63R1fEV-6hYuS55l0=', // Replace with actual URL
      name: 'Mr. Chonk',
      age: '2 years',
      breed: 'Cat',
      gender: 'Male',
      location: 'Mumbai, India'
    },
    {
      image: 'https://media.istockphoto.com/id/597658336/photo/sadness.jpg?s=2048x2048&w=is&k=20&c=AA99rIo6IQJzs0UASDhgoSnFqr63R1fEV-6hYuS55l0=', // Replace with actual URL
      name: 'Bella',
      age: '3 years',
      breed: 'Dog',
      gender: 'Female',
      location: 'Jabalpur'
    },
    {
      image: 'https://media.istockphoto.com/id/597658336/photo/sadness.jpg?s=2048x2048&w=is&k=20&c=AA99rIo6IQJzs0UASDhgoSnFqr63R1fEV-6hYuS55l0=', // Replace with actual URL
      name: 'Sera',
      age: '3 years',
      breed: 'Siamese',
      gender: 'Female',
      location: 'India'
    },
    {
      image: 'https://media.istockphoto.com/id/597658336/photo/sadness.jpg?s=2048x2048&w=is&k=20&c=AA99rIo6IQJzs0UASDhgoSnFqr63R1fEV-6hYuS55l0=', // Replace with actual URL
      name: 'Bella',
      age: '3 years',
      breed: 'Dog',
      gender: 'Female',
      location: 'Los Angeles, CA'
    },
    {
      image: 'https://media.istockphoto.com/id/597658336/photo/sadness.jpg?s=2048x2048&w=is&k=20&c=AA99rIo6IQJzs0UASDhgoSnFqr63R1fEV-6hYuS55l0=', // Replace with actual URL
      name: 'Bella',
      age: '3 years',
      breed: 'Dog',
      gender: 'Female',
      location: 'Los Angeles, CA'
    }
  ];

  const addPetsToRealtimeDB = async () => {
    try {
        for (const pet of pets) {
            const imageRef = ref(storage, `images/${pet.name}`);
            const response = await fetch(pet.image);

            if (!response.ok) {
                throw new Error(`Failed to fetch image: ${response.statusText}`);
            }

            const blob = await response.blob();
            const snapshot = await uploadBytes(imageRef, blob);
            const imageUrl = await getDownloadURL(snapshot.ref);
            console.log('Image URL:', imageUrl); // Debugging line

            const petRef = dbRef(db, 'pets/' + pet.name);
            await set(petRef, {
                ...pet,
                image: imageUrl
            });
        }
        console.log('Pets added to Realtime Database successfully!');
    } catch (error) {
        console.error('Error adding pets to Realtime Database: ', error);
    }
};

// Call the function (you can call this when the component mounts or in an effect)
addPetsToRealtimeDB();




export default function Home() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        const fetchPets = async () => {
            const dbRef = ref(db, 'pets');
            const snapshot = await get(dbRef);

            if (snapshot.exists()) {
                const data = snapshot.val();
                const petsList = Object.values(data);
                setPets(petsList);
            } else {
                console.log("No data available");
            }
        };

        fetchPets();
    }, []);

    return (
        <div className="mx-auto w-screen">
            <div className='text-white block items-center p-4'>
                <div className='text-6xl text-center'>Welcome to PawsOrg.</div>
                <div className='mt-4 text-pretty text-end text-xl'>
                    - Your Gateway to Finding a Furry Friend!
                </div>
                <div className=' text-2xl text-center'>    
                   <br/> Discover the joy of adopting a pet and giving them a forever home.<br/> Explore our list of lovable pets waiting for a family like yours.
                </div> 
            </div>

            <div className="h-40 bg-[url('./assets/banner.png')] w-screen bg-no-repeat bg-center bg-cover">
                <div className="p-3 text-3xl text-left mt-4">
                    Our mission is to connect abandoned or homeless pets with caring families.<br />
                    Every pet deserves a loving home, and we are here to make that connection happen. 
                </div>
            </div>

            <div className="text-6xl text-center text-white">Adopt a Pet</div>
            <div className='flex justify-center'>
                <div className="mt-10 w-[950px] overflow-x-auto ">
                    <div className="flex space-x-4 ">
                        {pets.map((pet, index) => (
                            <Card key={index} pet={pet} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
