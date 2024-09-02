import React from 'react';
import PropTypes from 'prop-types'

const Card = ({ pet }) => {
    return (
        <div className="card flex-shrink-0 w-80 bg-white shadow-lg p-4 m-2 rounded-lg">
            <img src={pet.image} alt={pet.name} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-2">
                <h2 className="text-xl font-bold">{pet.name}</h2>
                <p className="text-gray-600">{pet.age} • {pet.breed} • {pet.gender}</p>
                <p className="text-gray-500">{pet.location}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    pet: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
};
export default Card;