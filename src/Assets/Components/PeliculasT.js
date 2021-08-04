import React, { useEffect, useState } from 'react'
import CardPeliculasT from "./cardPeliculasT";

export default function PeliculasT() {
    const [peliculasT, setpeliculasT] = useState([])
    const url="https://api-movies-free.herokuapp.com/api/v2/movies";
    const fetchpeliculas = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setpeliculasT(data.items))
            .catch(error => console.error(error))
    };
    useEffect(() => {
      fetchpeliculas(url)  
    },[])
    return (
        <>
            <CardPeliculasT peliculasT={peliculasT} />
        </>
    );
}
