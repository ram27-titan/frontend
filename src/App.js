import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DetailProduct from './components/DetailProduct';
import EditProduct from './components/EditProduct';
import HomeProducts from './components/HomeProducts';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomeProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path="edit/:id" element={<EditProduct />} />
          <Route path="detail/:id" element={<DetailProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
