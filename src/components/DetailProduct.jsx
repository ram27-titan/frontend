import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const res = await axios.get(`http://localhost:5000/products/${id}`);
    setName(res.data.name);
    setPrice(res.data.price);
    setStock(res.data.stock);
  };

  return (
    <div className="ml-[25%] mt-[5%]">
      <div className="bg-blue-600 mt-2  rounded-2xl lg:mx-20 w-[700px]  ">
        <h1 className="font-bold text-white mt-5 ml-4 text-2xl p-2 ">Form Add Product</h1>

        <div className="mt-2 p-2 bg-white mx-4 rounded-lg">
          <label className="block text-blue-500 font-bold pr-4">Name</label>
          <div className="control">
            <h1 className="font-semibold">{name}</h1>
          </div>
        </div>
        <div className="mt-5 p-2 bg-white mx-4 rounded-lg  ">
          <label className="block text-blue-500 font-bold pr-4">Price</label>
          <div className="control">
            <h1 className="font-semibold">{price}</h1>
          </div>
        </div>
        <div className="mt-5 p-2 mb-4 bg-white mx-4 rounded-lg">
          <label className="block text-blue-500 font-bold pr-4">Stock</label>
          <div className="control">
            <h1 className="font-semibold">{stock}</h1>
          </div>
        </div>
        <div className="p-3 ">
          <div className="control">
            <Link to={'/'} type="submit" className="text-white  bg-transparent border-[3px] hover:bg-white hover:text-blue-600 duration-300 border-green-600 p-2 px-5  ml-2 rounded-2xl font-semibold">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
