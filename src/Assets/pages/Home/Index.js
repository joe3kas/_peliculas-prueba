import React from 'react'
import Peliculas from '../../Components/Peliculas';
import './estilos.css';

export default function Index() {
    return (
        <div className="container2-fluid">
                <div className="container">
                    <div className="busqueda row">
                        <div className="col-8">
                        <input className="form-control m" type="search" placeholder="Search" aria-label="Search" />
                         </div>
                    </div>
                    <br/>
                    <div>
                    <h4 className="titulos">My Favorites</h4>
                    <br/>
                    <p>
                    You haven't favorited any movies yet
                    </p>
                    <br/>
                    <h4 className="titulos">Popular Movies</h4>
                    <Peliculas/>
                    <br/>
                    <h4 className="titulos">Top Rated</h4>
                    <Peliculas/>
                    <br/>
                    </div>
                </div>
            </div>
    )
}
