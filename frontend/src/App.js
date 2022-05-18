//imports
import ColorsList from './pages/ColorsList';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Color from './pages/Color';
import axios from 'axios';
import React, {useState,useEffect } from "react"
import SearchResults from './pages/SearchResults';

function App(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await axios("https://api.color.pizza/v1/", {
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

  // const item = (products)

  return (
    <div>
      <Nav/>
    <Routes>
      <Route path='/'element={<Main products = {products}/>} />
      <Route path='/product/:id/*' element={<Color products = {products}/>} />
      <Route path='/products/' element={<ColorsList products = {products}/>} />
      <Route path='/products/results' element={<SearchResults products = {products}/>} />
    </Routes>
    </div>
  );
}

export default App;
