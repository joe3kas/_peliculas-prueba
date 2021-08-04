import React from 'react'
import { Link } from 'react-router-dom';

export default function cardPeliculasP({ peliculasP = [] }) {
    return (
        <>
            <div className="d-flex justify-content-evenly">
                {
                    peliculasP.filter(items => items.stars >= 5).map(( items, index ) => (
                    <div key={index} className="poster">
                        <Link to={"/Pelicula/"+items.id}>
                        <img className="card-img-top" src={items.image} alt={items.name}/>
                        </Link>
                    </div>
                    ))
                }
            </div>
        </>
    );
};
