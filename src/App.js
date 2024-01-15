import { useEffect, useState } from "react"
import React from "react";
import './App.css';
import { Navbar} from './Navbar';
import { HorizontalScroll} from './HorizontalScroll';
import {data} from "./mockData"
function App() {

  return (
    <>
    <Navbar/>
    <HorizontalScroll songs = {data} />
    <HorizontalScroll songs = {data} NoImg={true}/>
    </>
  );
}

export default App;
