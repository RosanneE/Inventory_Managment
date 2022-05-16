//imports
import InventoryList from './pages/InventoryList';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Item from './pages/Item';
import axios from 'axios';
import React, {useState,useEffect} from "react"
import SearchResults from './pages/SearchResults';
import Edit from './pages/Edit';
import Add from './pages/Add'

function App(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await axios(" https://api.color.pizza/v1/212121,060606,ff0012,550055,123456", {
              })
              setProducts(data.data.colors)
              //console.log(products)
          } catch (error) {
              console.log(error)
              throw error
          }
      }
      fetchData()
  }, [])

  const item = (products)

  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/products/add' element={<Add />} />
      <Route path='/products/edit' element={<Edit />} />
      <Route path='/product/:id' element={<Item products = {products}/>} />
      <Route path='/products/' element={<InventoryList products = {products}/>} />
      <Route path='/products/results' element={<SearchResults />} />
    </Routes>
    </div>
  );
}

export default App;
