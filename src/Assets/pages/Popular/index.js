import React from 'react'
import PeliculasP from '../../Components/PeliculasP'

export default function Popular() {
    return (
        <div className="container">
            <div className="busqueda row">
                    <div className="col-8">
                        <input className="form-control m" type="search" placeholder="Search" aria-label="Search" />
                    </div>
                </div>
            <br/>
                    <h4 className="titulos">Popular Movies</h4>
                    <PeliculasP/>
                    <br/>
        </div>
    )
}
