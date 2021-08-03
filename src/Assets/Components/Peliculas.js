import React, { useEffect, useState } from 'react'
import CardPeliculas from "./cardPeliculas";

export default function Peliculas() {
    const [peliculas, setpeliculas] = useState([])
    const url="https://api-movies-free.herokuapp.com/api/v2/movies";
    const fetchpeliculas = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setpeliculas(data.items))
            .catch(error => console.error(error))
    };
    useEffect(() => {
      fetchpeliculas(url)  
    },[])
    return (
        <>
            <CardPeliculas peliculas={peliculas} />
        </>
    );
}
