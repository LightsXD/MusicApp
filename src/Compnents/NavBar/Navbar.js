import React from "react";
import { SearchBox} from '../SearchBar/searchbar';
import './navbar.css';

export function Navbar(){
    return(
    <div class="topnav">
    <a class="active" href="#home">Spotify</a>
    <a href="#Home">Home</a>
    <a href="#Feed">Feed</a>
    <a href="#Library">Library</a>
    <SearchBox/>
    </div>
    )
}