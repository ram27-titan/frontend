import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/products', {
        name,
        price,
        stock,
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-blue-600 mt-5 ml-20 text-2xl ">Form Add Product</h1>

      <form onSubmit={createProduct} className="w-full bg-blue-600 border border-blue-900 rounded-2xl mt-2 ml-20 p-4 max-w-sm">
        <div className="mt-2 p-2 ">
          <label className="block text-white font-bold pr-4">Name</label>
          <div className="control">
            <input
              type="text"
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
        </div>
        <div className="mt-2 p-2">
          <label className="block text-white font-bold pr-4">Price</label>
          <div className="control">
            <input
              type="text"
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
        </div>
        <div className="mt-2 p-2 mb-2">
          <label className="block text-white font-bold pr-4">Stock</label>
          <div className="control">
            <input
              type="text"
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Stock"
            />
          </div>
        </div>
        <div className="p-2">
          <div className="control">
            <button type="submit" className="text-white mr-6 hover:bg-white hover:text-blue-600 duration-300 bg-green-500 p-2 px-5 rounded-2xl font-semibold">
              Save
            </button>
            <Link to={'/'} type="submit" className="text-white  bg-transparent border-2 hover:bg-white hover:text-blue-600 duration-300 border-green-600 p-2 px-5 rounded-2xl font-semibold">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
