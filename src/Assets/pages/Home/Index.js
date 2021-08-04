import React from 'react'
import PeliculasP from '../../Components/PeliculasP';
import PeliculasT from '../../Components/PeliculasT';
import './estilos.css';

export default function Home() {
    return (
        <div className="container2-fluid">
            <div className="container">
                <div className="busqueda row">
                    <div className="col-8">
                        <input className="form-control m" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
                <br />
                <div>
                    <h4 className="titulos">My Favorites</h4>
                    <br />
                    <p>
                        You haven't favorited any movies yet
                    </p>
                    <br />
                    <h4 className="titulos">Popular Movies</h4>
                    <PeliculasP />
                    <br />
                    <h4 className="titulos">Top Rated</h4>
                    <PeliculasT />
                    <br />
                </div>
            </div>
        </div>
    )
}
