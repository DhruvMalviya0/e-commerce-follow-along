import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCard = ({ _id, name, price, description, image, category }) => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleClick = () => {
        navigate(`/product/${_id}`);
    };

    // Safely handle image array
    const imageArray = Array.isArray(image) ? image : [];
    const currentImage = imageArray.length > 0 
        ? (imageArray[currentImageIndex]?.startsWith('http') 
            ? imageArray[currentImageIndex] 
            : `http://localhost:8000${imageArray[currentImageIndex]}`)
        : 'https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image';

    return (
        <div 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={handleClick}
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={currentImage}
                    alt={name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image';
                    }}
                />
                {imageArray.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {imageArray.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(index);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${price}</span>
                    <span className="text-sm text-gray-500">{category}</span>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.string.isRequired
};

export default ProductCard; 