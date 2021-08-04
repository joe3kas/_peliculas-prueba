import React from 'react'
import { Link} from 'react-router-dom';

export default function cardPeliculasT({ peliculasT = [] }) {
    return (
        <>
            <div className="d-flex justify-content-evenly">
                {
                    peliculasT.map(( items, index ) => (
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
