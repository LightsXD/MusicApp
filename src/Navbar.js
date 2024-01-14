import React from "react";
import { SearchBox} from './searchbar';
import './CSS/navbar.css';

export function Navbar(){
    return(
    <div class="topnav">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <SearchBox width={20}/>
    </div>
    )
}