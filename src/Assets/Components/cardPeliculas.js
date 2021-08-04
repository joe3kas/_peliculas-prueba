import React from 'react'

export default function cardPeliculas({ peliculas = [] }) {
    return (
        <>
            <div className="d-flex justify-content-evenly">
                {
                    peliculas.map(( items, index ) => (
                    <div key={index} className="poster">
                        <img className="card-img-top" src={items.image} alt={items.name}/>
                    </div>
                    ))
                }
            </div>
        </>
    );
};
