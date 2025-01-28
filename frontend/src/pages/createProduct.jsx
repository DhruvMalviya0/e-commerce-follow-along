//eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"

const CreateProduct = () => {
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [email, setEmail] = useState("");

    const categoriesData = [
        {
            title: "Electronics",
        },
        {
            title: "Clothing",
        },
        {
            title: "Books",
        },
        {
            title: "Home & Garden",
        }
    ];

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        setImages((prevImages) => prevImages.concat(files));

        const imagePreviews = files.map((file) => URL.createObjectURL(file));

        setPreviewImages((prevPreviews) => prevPreviews.concat(imagePreviews));


        useEffect(() => {
            // Clean up function to revoke object URLs when component unmounts
            return () => {
                previewImages.forEach((url) => URL.revokeObjectURL(url));
            };
        }, [previewImages]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send product data to server
        const productData = {
            name,
            description,
            category,
            tags,
            price,
            stock,
            images,
            email,
        }

        console.log("Product data: ", productData);
        alert("Product created successfully!");

        // Reset form inputs
        setName("");
        setDescription("");
        setCategory("");
        setTags([]);
        setPrice("");
        setStock("");
        setEmail("");
        setImages([]);
        setPreviewImages([]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-12 
        flex flex-col justify-center items-center sm:px-6 lg:px-8">
            <div className="w-[90%]max-w-[600px] pxbd-white shadow h-auto rounded-[4x] p-4 mx-auto">
                <h5 className="mt-6-text-center text-3xl font-bold text-gra-900">Craete Product</h5>
                <form action={handleSubmit}>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Product Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter product name"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={description}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter product description"
                            rows={5}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option className="blocktext-s font-medium text-gray-700" value="">Select a category</option>
                            {categoriesData.map((category) => (
                                <option key={category.title} value={category.title}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Tags <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={tags.join(", ")}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setTags(e.target.value.split(", "))}
                            placeholder="Enter product tags (comma-separated)"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={price}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter product price"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Stock <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            value={stock}
                            className="w-full p-2 border rounded"
                            onChange={(e) => setStock(e.target.value)}
                            placeholder="Enter product stock"
                            required
                        />
                    </div>
                    <div className="mt-4 flex justify-center">
                        <div className="flex gap-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Product Images <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="file" 
                                id = "upload" 
                                multiple 
                                onChange={handleImageChange} 
                                required 
                            />
                            // Add image upload button
                            <label htmlFor="upload" className="cursor-pointer p-2">
                                <AiOutlinePlusCircle size={20} color="#555" />
                            </label>
                        </div>
                        // Display uploaded images
                        <div className="flex flex-wrap mt-2">
                            {previewImages.map((image, index) => (
                                <img 
                                    src={image} 
                                    key={index} 
                                    alt="Product Image" 
                                    className="w-[100px] h-[100px] object-cover m-2" 
                                />
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                            Create Product
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateProduct;