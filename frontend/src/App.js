//imports
import InventoryList from './pages/InventoryList';
// import Header from './components/Nav';
// import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// import axios from 'axios'
import './App.css';
import Login from './pages/Login';
import Item from './pages/Item';
import SearchResults from './pages/SearchResults';
import Edit from './pages/Edit';
import Add from './pages/Add'


function App() {

  const [products, setProducts] = useState([])

  fetchData()

  async function fetchData() {
    const url = 'https://api.color.pizza/v1/212121,060606,ff0012,550055,123456'
    try {
      const data = await fetch(url)
      console.log(data)
    } catch (err) {
      console.log(err)
      throw err
    }
  }


  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/products' element={<InventoryList />} />
      <Route path='/products/add' element={<Add />} />
      <Route path='/products/edit' element={<Edit />} />
      <Route path='/products/results' element={<SearchResults />} />
      <Route path='/products/:id' element={<Item />} />
    </Routes>
  );
}

export default App;
