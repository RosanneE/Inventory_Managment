//imports
import InventoryList from './pages/InventoryList';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const url = 'https://swapi.dev/api/starships'
    try {
      const res = await fetch(url)
      const json = await res.json()
      //setShips(json.results)
      console.log(json.results)
    } catch (err) {
      throw err
      console.log(err)
    }
  }


  return (
    <div className="App">
      <Header/>
      <InventoryList/>
      <Footer/>
    </div>
  );
}

export default App;
