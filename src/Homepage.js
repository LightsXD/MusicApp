import React from "react";
import { Navbar} from './Navbar';
import { HorizontalScroll} from './HorizontalScroll';
import {data} from "./mockData"

export function Homepage(){
    return(
    <>
    <Navbar/>
    <HorizontalScroll songs = {data} description={"Recently Played"} />
    <HorizontalScroll songs = {data} NoImg={true} description={"Song Your Might Like"}/>
    </>
    )
}