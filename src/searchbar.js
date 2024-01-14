import { useEffect, useState } from "react"
import React from "react";
import './CSS/searchbar.css';
export function SearchBox({ width = 100 }){
    const [find,setfind] = useState("")
    return(
        <>
        <input type="text" 
        class="search" 
        value={find} 
        onChange={e => setfind(e.target.value)} 
        name="search" 
        placeholder="Search Tracks" 
        size={width}></input>
        </>
    )
}