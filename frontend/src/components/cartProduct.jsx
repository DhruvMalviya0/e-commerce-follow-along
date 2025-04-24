import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function CartProducts({ _id, name, images, quantity, price }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantityVal, setQuantityVal] = useState(quantity);

  useEffect(() => {
    if (!images || images.length === 0) return;

    setCurrentIndex(0); // Reset when images change

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  const updateQuantityVal = async (quantity) => {
    try {
      const res = await fetch("http://localhost:8000/api/v2/product/cartproduct/quantity", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "dips@gmail.com",
          productId: _id,
          quantity,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update quantity");
      }

      const data = await res.json();
      console.log("Updated quantity:", data);
      setQuantityVal(quantity); // Only update if successful
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateQuantityVal(quantityVal);
    }, 500);

    return () => clearTimeout(timeout);
  }, [quantityVal]);

  const handleIncrement = () => setQuantityVal((prev) => prev + 1);
  const handleDecrement = () => setQuantityVal((prev) => (prev > 1 ? prev - 1 : 1));

  const currentImage = images?.[currentIndex] || "/placeholder.jpg"; // Fallback image

  return (
    <div className="h-max w-full p-4 flex justify-between border-b border-neutral-300 bg-neutral-100 rounded-lg">
      <div className="flex flex-col gap-y-2">
        <img
          src={`http://localhost:8000${currentImage}`} // Fixed template literal
          alt={name}
          className="w-32 h-32 object-cover rounded-lg border border-neutral-300"
        />
        <div className="flex flex-row items-center gap-x-2 md:hidden">
          <button
            onClick={handleDecrement}
            className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl"
          >
            <IoIosRemove />
          </button>
          <div className="px-5 py-1 text-center bg-gray-100 rounded-xl">{quantityVal}</div>
          <button
            onClick={handleIncrement}
            className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl"
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center px-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-lg font-semibold">${price * quantityVal}</p>
        <div className="hidden md:flex flex-row items-center gap-x-2">
          <button
            onClick={handleDecrement}
            className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl"
          >
            <IoIosRemove />
          </button>
          <div className="px-5 py-1 text-center bg-gray-100 rounded-xl">{quantityVal}</div>
          <button
            onClick={handleIncrement}
            className="flex justify-center items-center bg-gray-200 hover:bg-gray-300 active:translate-y-1 p-2 rounded-xl"
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

CartProducts.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
