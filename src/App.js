import React, { useState } from 'react';
import Data from './Components/Form/DataStore/Data';
import Form from './Components/Form/Form';
import './App.css';

const App = () => {
  const [productList, setProductList] = useState({
    food: [],
    skincare: [],
    electronic: [],
  });

  const addProduct = (product) => {
    setProductList((prevList) => ({
      ...prevList,
      [product.category]: [...prevList[product.category], product],
    }));
  };

  return (
    <div>
      <Form addProduct={addProduct} />
      <Data products={productList} />
    </div>
  );
};

export default App;
