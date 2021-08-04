import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import './estilos.css';

export default function Peliculas() {
    const { peliculaid } = useParams();
    console.log(peliculaid);
    const [peliculasD, setpeliculasD] = useState([])
    const url = "https://api-movies-free.herokuapp.com/api/v2/movies";

    const fetchpeliculas = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setpeliculasD(data.items))
            .catch(error => console.error(error))
    };

    useEffect(() => {
        fetchpeliculas(url)
    }, [peliculaid])


    return (
        <div className="container">
            <div className="d-flex justify-content-evenly">
                {
                    peliculasD.filter(items => items.id == peliculaid).map((items, index) => (
                        <div key={index} className="detalle">
                            <div className="card mb-6">
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={items.image} className="img-fluid rounded-start" alt="" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{items.name}</h5>
                                            <p className="card-text">{items.description}</p>
                                            <p className="card-text">{items.director} - {items.year}</p>
                                            <p className="card-text"><small className="text-muted">Estrellas: {items.stars}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}
