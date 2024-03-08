import { useEffect, useState } from "react"
import React from "react";
import './searchbar.css';
export function SearchBox(){
    const [find,setfind] = useState("")
    return(
        <>
        <input type="text" 
        class="search" 
        value={find} 
        onChange={e => setfind(e.target.value)} 
        name="search" 
        placeholder="Search Tracks"></input>
        </>
    )
}