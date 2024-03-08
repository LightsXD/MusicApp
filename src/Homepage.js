import React from "react";
import { Navbar} from './Compnents/NavBar/Navbar';
import { HorizontalScroll} from './Compnents/ItemTray/HorizontalScroll';
import AudioPlayer from "./Compnents/AudioPlayer/AudioPlayer";
import {data} from "./mockData"

export function Homepage(){
    return(
    <>
    <Navbar/>
    <HorizontalScroll songs = {data} description={"Recently Played"} />
    <HorizontalScroll songs = {data} NoImg={true} description={"Song Your Might Like"}/>
    <AudioPlayer></AudioPlayer>
    </>
    )
}