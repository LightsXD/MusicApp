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
    <HorizontalScroll songs = {data} description={"Recently Played"} />
    <HorizontalScroll songs = {data} NoImg={true} description={"Song Your Might Like"}/>
    </>
  );
}

export default App;
