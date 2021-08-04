import React, { useEffect, useState } from 'react'
import CardPeliculasP from "./cardPeliculasP";

export default function Peliculas() {
    const [peliculasP, setpeliculasP] = useState([])
    const url="https://api-movies-free.herokuapp.com/api/v2/movies";
    const fetchpeliculas = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setpeliculasP(data.items))
            .catch(error => console.error(error))
    };
    useEffect(() => {
      fetchpeliculas(url)  
    },[])
    return (
        <>
            <CardPeliculasP peliculasP={peliculasP} />
        </>
    );
}
