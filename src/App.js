import { useEffect, useState } from "react"
import React from "react";
import './App.css';
import { Navbar} from './Navbar';
import { HorizontalScroll} from './HorizontalScroll';
function App() {
  return (
    <>
    <Navbar/>
    <HorizontalScroll/>
    </>
  );
}

export default App;
